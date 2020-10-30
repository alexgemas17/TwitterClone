import {database, db, firebase, githubAuthProvider, googleAuthProvider}  from '../firebase/config'
import { GetTimeline } from '../helpers/DBListeners'
import { types } from '../types'
import { cleanTimeline } from './tweet'

export const StartLoginWithGithub = () => {
    return (dispatch) => {
        
        firebase.auth().signInWithPopup( githubAuthProvider )
        .then( ({user}) => {
            const userName = user.email.split('@')[0]

            db.collection('users').doc(user.uid).get()
            .then(dataUser => {
                if(!dataUser.exists) {
                    
                    const newUser = {
                        displayName: user.displayName,
                        userName: userName,
                        photoURL: user.photoURL,
                        email: user.email,
                        likes: 0,
                        tweets: 0,
                        description: '¡Cambia la descripción en "Editar perfil" para poner la descripción que quieras!'
                    }
                    const userRef = database.ref('users/' + user.uid).set(newUser)

                    let currentUser =  database.ref('users').child(userRef.key)
                    currentUser.child("Following").child('QL1PvcozkkUDgXeeYWlMydbLbpN2').set(true)
                }
            })
            dispatch(login( user.uid, userName, user.displayName, user.photoURL ))
            
            GetTimeline( user.uid, dispatch)
        })
    }
}

export const StartLoginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({user}) => {
            const userName = user.email.split('@')[0]

            db.collection('users').doc(user.uid).get()
            .then(dataUser => {
                if(!dataUser.exists) {
                    
                    const newUser = {
                        displayName: user.displayName,
                        userName: userName,
                        photoURL: user.photoURL,
                        email: user.email,
                        likes: 0,
                        tweets: 0,
                        description: '¡Cambia la descripción en "Editar perfil" para poner la descripción que quieras!'
                    }
                    database.ref('users/' + user.uid).set(newUser)
                }
            })
            dispatch(login( user.uid, userName, user.displayName, user.photoURL ))
        })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()

        dispatch(logout())
        dispatch(cleanTimeline())
    }
}

export const login = (uid, userName, displayName, photoURL) => {
    return {
        type: types.login,
        payload: {
            uid,
            userName,
            displayName,
            photoURL
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}