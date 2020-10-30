import React from 'react'
import { InfoUserComponent } from './InfoUserComponent'
import { LogoComponent } from './LogoComponent'
import { MenuComponent } from './MenuComponent'

export const NavbarComponent = () => {

    console.log('true')

    const handleInput = async () => {

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
