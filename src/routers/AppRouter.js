import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/config'
import { 
    BrowserRouter as Router,
    Redirect,
    Switch 
} from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { LoginComponent } from '../components/Loggin/LoginComponent'
import { TwitterApp } from '../components/TwitterApp'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'


export const AppRouter = () => {
    const dispatch = useDispatch()
    const [checkingDBLogin, setCheckingDBLogin] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                const userName = user.email.split('@')[0]
                dispatch( login( user.uid, userName, user.displayName, user.photoURL ) )
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
        <Router>
            <div>
                <Switch>
                    <PublicRouter 
                        path='/login'
                        isAuthenticated={isLoggedIn}
                        component={LoginComponent}
                    />

                    <PrivateRouter 
                        path='/'
                        isAuthenticated={isLoggedIn}
                        component={TwitterApp}
                    />

                    <Redirect to='login' />
                </Switch>
            </div>
        </Router>
    )
}