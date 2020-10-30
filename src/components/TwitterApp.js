import React from 'react';
import { ExplorerComponent } from './Explorer/ExplorerComponent';
import { NavbarComponent } from './Navbar/NavbarComponent';
import { TwitterAppRouter } from './TwitterAppRouter';

export const TwitterApp = () => {
  return (
    <div className='main-wrapper'>
      <div className='container'>

        <NavbarComponent />
        
        <TwitterAppRouter />

        <ExplorerComponent />

      </div>
    </div>
  )
}