import React from 'react'
import { db } from '../../firebase/config'
import { InfoUserComponent } from './InfoUserComponent'
import { LogoComponent } from './LogoComponent'
import { MenuComponent } from './MenuComponent'

export const NavbarComponent = () => {

    const handleInput = async () => {
        /*
        const uid = 'tfUPA10GhJoEej8gyFSk'

        // Creamos un nuevo Tweet
        
        const newTweet = {
            usedID: uid,
            body: 'This is a tweet 5 !!!!!!!!!',
            date: new Date().getTime()
        }
        
        // Lo enlazamos en tabla de tweets
        const { id:TweetID } = await db.collection('tweets').add(newTweet)

        //Enlazamos el tuit con el usuario: TIPE -> Tweet, Retweet
        db.collection(`users/${uid}/Tweets`).add({ tweetID: TweetID, type: 'Tweet'})
        db.collection(`users/${uid}/Timeline`).add({ tweetID: TweetID, type: 'Tweet'})
        
        // Actualizar field de un documento (en este caso el de un usuario)
        db.collection(`users`).doc(uid).update({
            numFavs: 1
        })

        // Añadir a mis followers en sus timelines mi tweet ---> Esto se debe pasar a Firebase FUNCTIONS
        db.collection(`users/${uid}/Followers`)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const follower = doc.data()
                db.collection(`users/${ follower.userID }/Timeline`).add({ tweetID: TweetID, type: 'Tweet'})
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        

        /*
        // Obtengo el tweet con ese ID
        db.collection(`users/${uid}/Timeline`)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                db.collection('tweets').doc(doc.data().tuidID)
                .get()
                .then((data) => {
                    console.log(data.data())
                })
            })
        })

        // Así estoy escuchando a una colección concreta!
        db.collection(`users/${uid}/Timeline`)
        .onSnapshot(function(snapshot) {
            if(snapshot.docChanges().length > 0){
                console.log('Nuevo tweet en mi timeline!')
            }
        });
    

        // ELIMINAR TWEETS A MÍ
        /*
        const tweetDeleteID = '0gV5aY9b04wEKcOWavg0'
        db.collection("tweets").doc(tweetDeleteID).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

        db.collection(`users/${uid}/Followers`)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                
                //console.log(doc.id, " => ", doc.data());
                const followerID = doc.data().userID
                db.collection(`users/${followerID}/Timeline`)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if( doc.data().tweetID === tweetDeleteID ){
                            db.collection(`users/${followerID}/Timeline`).doc(doc.id).delete().then(() => {
                                console.log("Document successfully deleted!");
                            }).catch(function(error) {
                                console.error("Error removing document: ", error);
                            });
                        }
                    })
                });
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        */
        
    }

    return (
        <div className='Navbar'>
            <LogoComponent />

            <MenuComponent />

            <div className='button-tuit' onClick={handleInput}> 
                <span className='btn-primary'>Twittear</span> 
            </div>

            <InfoUserComponent />
        </div>
    )
}
