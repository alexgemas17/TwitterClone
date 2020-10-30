import React, { useEffect, useState } from 'react'
import { GetTweetlistFromUser } from '../../helpers/UploadTweetToDB'
import { TimelineListItem } from '../Timeline/TimelineListItem'

export const TweetsList = ({UserDataUID, CollectionFromDB}) => {

    const [tweetlist, setTweetlist] = useState({tweets: [], isLoading:true})
    const { tweets, isLoading } = tweetlist

    useEffect(() => {
        GetTweetlistFromUser( UserDataUID, CollectionFromDB, setTweetlist )
    }, [UserDataUID, CollectionFromDB ])
    
    if(isLoading) {
        return <>
        </>
    }

    return (
        <div className='TimelineList'>
            {
                tweets.forEach( (tweet) => {
                    return <TimelineListItem tweet={tweet} />
                })
            }
        </div>
    )
}
