import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderUser = ({ user}) => {

    return (
        <div className='UserHeader'>
            <div>
                <Link to={'/'}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
            </div>

            {
                (user)&&(
                    <div>
                        <p> {user.DisplayName}</p>
                        <p className='subtitle'> {user.Likes} tweets </p>
                    </div>
                )
            }
            
        </div>
    )
}
