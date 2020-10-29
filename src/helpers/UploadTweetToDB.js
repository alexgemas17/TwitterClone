/*
const NewTweet = {
    userName: userName,
    userDisplayName: userDisplayName,
    photoUserURL: photoUserURL,
    photoURL: photoURL,
    textBody: textBody,
    time: new Date().getTime()
}
*/

import { db } from "../firebase/config"

export const UploadTweetToDB = async ( uidUser, newTweet ) => {
    const time = newTweet.time;

    // Lo enlazamos en tabla de tweets
    const { id:TweetID } = await db.collection('tweets').add(newTweet)

    //Enlazamos el tuit con el usuario: TIPE -> Tweet, Retweet
    const { id:idTweets } = await db.collection(`users/${uidUser}/Tweets`).add({ tweetID: TweetID, type: 'Tweet', time: time})
    db.collection(`users/${uidUser}/Tweets`).doc(idTweets).update({ uid:idTweets})

    const { id:idTimeline } = await db.collection(`users/${uidUser}/Timeline`).add({ tweetID: TweetID, type: 'Tweet', time: time})
    db.collection(`users/${uidUser}/Timeline`).doc(idTimeline).update({ uid:idTimeline })

    // Añadir a mis followers en sus timelines mi tweet ---> Esto se debe pasar a Firebase FUNCTIONS
    db.collection(`users/${uidUser}/Followers`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach( async(doc) => {
            const follower = doc.data()
            console.log(follower)
            const { id } = await db.collection(`users/${follower.userID}/Timeline`).add({ tweetID: TweetID, type: 'Tweet', time: time})
            db.collection(`users/${follower.userID}/Timeline`).doc(id).update({ uid:id })
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    return true;
}