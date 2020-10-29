import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ExplorerComponent } from './Explorer/ExplorerComponent';
import { NavbarComponent } from './Navbar/NavbarComponent';
import { TimelineComponent } from './Timeline/TimelineComponent';
import { UserComponent } from './User/UserComponent';

export const TwitterApp = () => {
  return (
    <div className='main-wrapper'>
      <div className='container'>

        <NavbarComponent />
        
        <Switch>
          <Route path='/:userID' component={ UserComponent }/>
          <Route exact path="/" component={ TimelineComponent } />
        </Switch>

        <ExplorerComponent />

      </div>
  </div>
  )
}