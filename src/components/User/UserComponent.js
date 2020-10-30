import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderUser } from './HeaderUser'
import { TweetsList } from './TweetsList'
import { database } from "../../firebase/config"
import { useSelector } from 'react-redux'
import { FollowUser } from '../../helpers/DBListeners'
import { ButtonFollower } from './ButtonFollower'

export const UserComponent = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { UserData } = useSelector(state => state.authReducer)
    const location = useLocation()
    const UserName = location.pathname.split('/')[1]
    
    useEffect(() => {
        database.ref('users').orderByChild('userName').equalTo(UserName).on("value", function(snapshot) {
            snapshot.forEach(function(data) {
                const userData = data.val()
                setUser({
                    UserUID: data.key,
                    DisplayName : userData.displayName,
                    UserName : userData.userName,
                    PhotoURL : userData.photoURL,
                    Likes : userData.likes,
                    Tweets:  userData.tweets,
                    Description: userData.description
                })
                setIsLoading(false)
            });
        });
    }, [UserName])

    const handleInputFollow = () => {
        FollowUser( UserData.UID, user.UserUID )
    }

    const handleInputUnfollow = () => {
        //FollowUser( UserData.UID, user.UserUID )
    }

    if(isLoading){
        return <>
        </>
    }

    if(!user){
        return <div className='Timeline'>
            <HeaderUser  user={undefined} />
            <div className='ErrorSearch'>
                <h1> Usuario no encontrado :( </h1>
            </div>
        </div>
    }

    return (
        <div className='Timeline'>
            <HeaderUser user={user}/>

            <div className='header_photo'>
                <div className='User'>
                    <img src={user.PhotoURL} alt='user' />
                </div>

                <img src='./imgs/header_user.png' alt='header' />
            </div>

            <div className='UserText'>
                <div className='UserOption'>
                    <div className='Info' >
                        <h2 className='DisplayName'>{user.DisplayName}</h2>
                        <p className='NameID'>@{user.UserName}</p>
                    </div>

                    {
                        ( UserData.UID !== user.UserUID ) ?
                        <ButtonFollower styleBtn={'Follow-btn'} handleInputFollow={handleInputFollow} />
                        : 
                        <ButtonFollower styleBtn={'Unfollow-btn'} handleInputFollow={handleInputUnfollow} />
                    }
                </div>

                <p className='description'>{user.Description}</p>
            </div>

            <div className='TweetBarHeader'>
                <h3> Tweets </h3>
            </div>

            <TweetsList UserDataUID={user.UserUID} CollectionFromDB={'Tweets'} />
        </div>
    )
}