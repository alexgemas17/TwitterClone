
import { database } from "../firebase/config"

export const UploadTweetToDB = async ( userUID, newTweet ) => {
    //const time = newTweet.time;
    const refTweet = database.ref('tweets').push(newTweet)
    
    //{ tweetID: refTweet.key, type: 'Tweet', time: time}
    let currentUser =  database.ref('users').child(userUID)
    currentUser.child("Tweets").child(refTweet.key).set(true)
    currentUser.child("Timeline").child(refTweet.key).set(true)

    currentUser.child("Followers")
    .once("value", (list) => {
        list.forEach((follower) => {
          var childRef = database.ref('users').child(follower.key);
          childRef.child("Timeline").child(refTweet.key).set(true);
        });
    });

    return true;
}

export const DeleteTweetFromDB = () => {

}

export const GetTweetlistFromUser = ( userUID, CollectionFromDB, setTweetlist ) => {
  let currentUser =  database.ref('users').child(userUID)
  
  currentUser.child(CollectionFromDB).once("value", (list) => {
    var arrTweets = []
    
    list.forEach((collection) => {
      database.ref('tweets').child(collection.key)
      .on("value", function(tweetData) {
        arrTweets.push(tweetData.val())
      });
    });
    setTweetlist({tweets: arrTweets, isLoading:false})
  });

}