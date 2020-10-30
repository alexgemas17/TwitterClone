import { UploadTweetToDB } from "../helpers/UploadTweetToDB"
import { types } from "../types"

export const CreateNewTweet = (uid, userName, userDisplayName, photoUserURL, photoURL, textBody) => {
    return async () => {

        const NewTweet = {
            userUID: uid,
            userName: userName,
            userDisplayName: userDisplayName,
            photoUserURL: photoUserURL,
            photoURL: photoURL,
            textBody: textBody,
            time: new Date().getTime()
        }

        if( UploadTweetToDB(uid, NewTweet) ){
            // Se subio correctamente
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