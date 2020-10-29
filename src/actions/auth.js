import {db, firebase, githubAuthProvider, googleAuthProvider}  from '../firebase/config'
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
                        description: 0
                    }

                    db.collection('users').doc(user.uid).set(newUser)
                }
            })
            dispatch(login( user.uid, userName, user.displayName, user.photoURL ))
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
                        description: 0
                    }

                    db.collection('users').doc(user.uid).set(newUser)
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