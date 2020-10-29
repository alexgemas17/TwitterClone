import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateNewTweet } from '../../actions/tweet'
import './style.css'

export const WriteTweetsComponent = () => {

    const dispatch = useDispatch()
    const { UserData } = useSelector(state => state.authReducer)
    const [valueTextArea, setValueTextArea] = useState('')

    const InputTextareaChage = (e) => {       
        setValueTextArea(e.target.value)
    }

    const handleInputSubmit = () => {
        dispatch( CreateNewTweet(UserData.UID, UserData.UserName, UserData.DisplayName, UserData.PhotoURL, '', valueTextArea) )

        setValueTextArea('')
    }

    return (
        <div className='tweet-container'>
            <div className='tweet-input'>
                <div className='TweetInputPhoto'>
                    <img src={ UserData.PhotoURL } type='text' alt='User foto'/>
                </div>

                <textarea 
                    type='text' 
                    name='textareatweet'
                    placeholder='¿Qué está pasando?'
                    value={valueTextArea}
                    onChange={InputTextareaChage}
                    />
            </div>

            <div className='tweet-buttons'>
                <div className='tweet-btn' type='button' onClick={handleInputSubmit}>
                    <span>Twittear</span>
                </div>
            </div>
        </div>
    )
}
