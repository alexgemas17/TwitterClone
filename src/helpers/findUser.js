import { db } from "../firebase/config"


export const findByUserName = (UserName, user) => {
    const usersRef = db.collection("users");
    usersRef.where("userName", "==", `${UserName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
            const dataUser = doc.data()
            user =  {
                displayName : dataUser.displayName,
                userName : dataUser.userName,
                photoURL : dataUser.photoURL,
                likes : dataUser.likes,
                tweets:  dataUser.tweets,
                description: dataUser.description
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}