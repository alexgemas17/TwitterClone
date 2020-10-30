import React from 'react'
import { Link } from 'react-router-dom'

export const TimelineListItem = ( {tweet} ) => {
    return (
        <div className='Tweet-wrapper'>

            <div className='TweetContainer'>
                <div className='TweetPhoto'>
                    <Link to={`/${tweet.userName}`}>
                    <img src={tweet.photoUserURL} alt='User foto'/>
                    </Link>
                </div>

                <div className='TweetData'>
                    <div className='TweetInfoUser'>
                        <p className='UserName'>{tweet.userDisplayName}</p>
                        <p className='UserID'>@{tweet.userName}</p>
                    </div>
                    <p>{tweet.textBody}</p>
                </div>

                <div className='TweetMoreOption'>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>

            {
                (tweet.photoURL) && 
                (<div className='TweetImage'>
                    <img src={tweet.photoURL} alt='User foto'/>
                </div>)
            }

            <div className='SocialMedia'>
                <i className="far fa-comment TweetMedia Comment"></i>
                <i className="fas fa-retweet TweetMedia Retweet"></i>
                <i className="far fa-heart TweetMedia Like"></i>
                <i className="far fa-share-square TweetMedia Share"></i>
            </div>

        </div>
    )
}
