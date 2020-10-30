import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth'

export const MenuComponent = () => {

    const dispatch = useDispatch()

    const {UserData} = useSelector(state => state.authReducer)

    const logout = () => {
        dispatch(startLogout())
    }

    const activeItemMenu = {
        color: "rgb(29, 161, 242)"
      }

    return (
        <div className='menu-container'>

            <NavLink 
                exact to={'TwitterClone/'} 
                activeStyle= {activeItemMenu}
            >
                <div className='menu-item'>
                    <span><i className="fas fa-home"></i> Inicio </span>
                </div>
            </NavLink>

            <div className='menu-item'>
                <span><i className="far fa-envelope"></i> Mensajes </span>
            </div>

            <div className='menu-item'>
                <span><i className="far fa-bookmark"></i> Guardados </span>
            </div>

            <NavLink to={`TwitterClone/${UserData.UserName}`} activeStyle={activeItemMenu}>
                <div className='menu-item'>
                    <span><i className="far fa-user"></i> Perfil </span>
                </div>
            </NavLink>

            <div className='menu-item' role='button' alt='more option botton' onClick={logout}>
                <span><i className="fas fa-sign-out-alt flip"></i> Logout </span>
            </div>
        </div>
    )
}
