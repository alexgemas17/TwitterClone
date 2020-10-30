import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth'
import { ContainerRouter } from './ContainerRouter';
import { GetTimeline } from '../helpers/DBListeners';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checkingDBLogin, setCheckingDBLogin] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                const userName = user.email.split('@')[0]
                dispatch( login( user.uid, userName, user.displayName, user.photoURL ) )
                GetTimeline( user.uid, dispatch)
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)
            }

            setCheckingDBLogin(false)
        })
    }, [dispatch])

    if(checkingDBLogin){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <ContainerRouter isLoggedIn={isLoggedIn} />
        </>
    )
}