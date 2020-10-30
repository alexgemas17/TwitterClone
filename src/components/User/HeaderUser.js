import React from 'react'
import { useHistory } from 'react-router-dom'

export const HeaderUser = ({ user}) => {

    const history = useHistory()

    const handleInputBack = () => {
        if (history.lenth <= 2){
            history.push()
        }
        else {
            history.goBack()
        }
    }

    return (
        <div className='UserHeader'>
            <div role='button' onClick={handleInputBack}>
                <i className="fas fa-arrow-left"></i>
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
