import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase/config'
import { TimelineList } from '../Timeline/TimelineList'
import { HeaderUser } from './HeaderUser'

export const UserComponent = () => {

    const [user, setUser] = useState({})
    const location = useLocation()
    const UserName = location.pathname.split('/')[1]
    
    useEffect(() => {
        const usersRef = db.collection("users");
        const userRef = usersRef.where("userName", "==", `${UserName}`)
        console.log(userRef)
        
        userRef.get()
        .then((querySnapshot) => {
            setUser(undefined)
            querySnapshot.forEach( (doc) => {
                const dataUser = doc.data()
                setUser({
                    UserUID: doc.id,
                    DisplayName : dataUser.displayName,
                    UserName : dataUser.userName,
                    PhotoURL : dataUser.photoURL,
                    Likes : dataUser.likes,
                    Tweets:  dataUser.tweets,
                    Description: dataUser.description
                })
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }, [UserName])

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

                <img src='./imgs/header_photo.png' alt='header' />
            </div>

            <div className='UserText'>
                <div className='Info' >
                    <h2 className='DisplayName'>{user.DisplayName}</h2>
                    <p className='NameID'>@{user.UserName}</p>
                </div>

                <p className='description'>{user.Description}</p>
            </div>

            <div className='TweetBarHeader'>
                <h3> Tweets </h3>
            </div>

            <TimelineList UserDataUID={user.UserUID} CollectionFromDB={'Tweets'} />

        </div>
    )
}
