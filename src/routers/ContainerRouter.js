import React from 'react'
import { 
    BrowserRouter as Router,
    Redirect,
    Switch 
} from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { LoginComponent } from '../components/Loggin/LoginComponent'
import { TwitterApp } from '../components/TwitterApp'

export const ContainerRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter 
                        path='TwitterClone/login'
                        isAuthenticated={isLoggedIn}
                        component={LoginComponent}
                    />

                    <PrivateRouter 
                        path='TwitterClone/'
                        isAuthenticated={isLoggedIn}
                        component={TwitterApp}
                    />

                    <Redirect to='login' />
                </Switch>
            </div>
        </Router>
    )
}
