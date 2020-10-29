import React from 'react'
import { useSelector } from 'react-redux'

export const InfoUserComponent = () => {
    
    const { UserData } = useSelector(state => state.authReducer)

    return (
        <div className='UserInfo'>
            <div className='UserPhoto'>
                <img src={ UserData.PhotoURL } alt='User foto'/>
            </div>

            <div className='UserData'>
                <p className='UserName'>{ UserData.DisplayName }</p>
                <p className='UserID'>@{ UserData.UserName }</p>
            </div>

            <div className='UserMoreOption'>
                <i className="fas fa-chevron-circle-down"></i>
            </div>
        </div>
    )
}
