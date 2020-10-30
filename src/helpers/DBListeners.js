import { addTweet } from "../actions/tweet";
import { database } from "../firebase/config"

// Listener que está escuchando la timeline y recibe los child añadidos.
export const GetTimeline = ( userID, dispatch ) => {

    var collectionFromDB = database.ref('users').child(userID).child('Timeline');
    
    collectionFromDB.on("child_added", function(snapshot) {
        var tweetID = snapshot.key
        var tweetRef = database.ref('tweets').child(tweetID);

        tweetRef.on("value", function(tweetData) {
            if(tweetData.exists){
                const tweet = tweetData.val()
                dispatch( addTweet(tweetData.key, tweet.userName, tweet.userDisplayName, tweet.photoUserURL, tweet.photoURL, tweet.textBody) )
            }
        });
    });

    // Eliminados
}

export const FollowUser = ( userUID, userFollowID ) => {
    let currentUser =  database.ref('users').child(userUID)
    let followingUser =  database.ref('users').child(userFollowID)

    followingUser.child("Followers").child(userUID).set(true)
    currentUser.child("Following").child(userFollowID).set(true)

    followingUser.child("Tweets")
    .once("value", (list) => {
        list.forEach((tweets) => {
          currentUser.child("Timeline").child(tweets.key).set(true);
        });
    });
}

export const Unfollow = ( userUID, userUnfollowID ) => {
    let currentUser =  database.ref('users').child(userUID)
    let followingUser =  database.ref('users').child(userUnfollowID)

    followingUser.child("Followers").remove(userUID)
    currentUser.child("Following").remove(userUnfollowID).set(true)

    followingUser.child("Tweets")
    .once("value", (list) => {
        list.forEach((tweets) => {
          currentUser.child("Timeline").remove(tweets.key).set(true);
        });
    });
}