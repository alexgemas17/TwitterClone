import React from 'react'
import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom';
import { TimelineComponent } from './Timeline/TimelineComponent';
import { UserComponent } from './User/UserComponent';

export const TwitterAppRouter = () => {
    return (
        <Router>
            <div className='Timeline'>
                <Switch>
                    <Route path='TwitterClone/:userID' component={ UserComponent }/>
                    <Route exact path="TwitterClone/" component={ TimelineComponent } />
                </Switch>
            </div>
        </Router>
    )
}
