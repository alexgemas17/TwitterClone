import { db } from "../firebase/config"
import { UploadTweetToDB } from "../helpers/UploadTweetToDB"
import { types } from "../types"

export const CreateNewTweet = (uid, userName, userDisplayName, photoUserURL, photoURL, textBody) => {
    return async (dispatch) => {

        const NewTweet = {
            userName: userName,
            userDisplayName: userDisplayName,
            photoUserURL: photoUserURL,
            photoURL: photoURL,
            textBody: textBody,
            time: new Date().getTime()
        }

        if( UploadTweetToDB(uid, NewTweet) ){
            dispatch(createTweet(userName, userDisplayName, photoUserURL, photoURL, textBody))
        }
    }
}

export const createTweet = (userName, userDisplayName, photoUserURL, photoURL, textBody) => {
    return {
        type: types.createTweet,
        payload: {
            userName: userName,
            userDisplayName: userDisplayName,
            photoUserURL: photoUserURL,
            photoURL: photoURL,
            textBody: textBody
        }
    }
}

export const addTweet = (tweetUID, userName, userDisplayName, photoUserURL, photoURL, textBody) => {
    return {
        type: types.addTweet,
        payload: {
            tweetUID: tweetUID,
            userName: userName,
            userDisplayName: userDisplayName,
            photoUserURL: photoUserURL,
            photoURL: photoURL,
            textBody: textBody
        }
    }
}

export const StartLoadTimeline = ( uid ) => {
    return async (dispatch) => {
        dispatch(cleanTimeline())

        await db.collection(`users/${uid}/Timeline`).orderBy("time").limit(50)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach( (doc) => {
                if (doc.exists) {
                     db.collection('tweets').doc(doc.data().tweetID)
                    .get()
                    .then((data) => {
                        const tweet = data.data() 
                        
                        dispatch(
                            createTweet(
                                tweet.userName, 
                                tweet.userDisplayName, 
                                tweet.photoUserURL, 
                                tweet.photoURL, 
                                tweet.textBody
                            )
                        )
                    })
                }
            })

        })
    }
}

export const LoadNewTimeline = ( uid, CollectionFromDB ) => {
    return async (dispatch) => {

        await db.collection(`users/${uid}/${CollectionFromDB}`).orderBy("time").limit(50)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach( (doc) => {
                if (doc.exists) {
                    const tweetUID = doc.data().uid
                    db.collection('tweets').doc(doc.data().tweetID)
                    .get()
                    .then((data) => {
                        const tweet = data.data() 
                        
                        dispatch(
                            addTweet(
                                tweetUID,
                                tweet.userName, 
                                tweet.userDisplayName, 
                                tweet.photoUserURL, 
                                tweet.photoURL, 
                                tweet.textBody
                            )
                        )
                    })
                }
            })
        })
    }
}

export const AddTweetsToTimeline = ( tweets ) => {
    return {
        type: types.addTweetsToTimeline,
        payload: tweets
    }
}


export const LoadTimeline = (timeline) => {
    return {
        type: types.loadTimeline,
        payload: timeline
    }
}

export const cleanTimeline = () => {
    return {
        type: types.cleanTimeline
    }
}