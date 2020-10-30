import React from 'react'
import { useSelector } from 'react-redux'
import { TimelineListItem } from './TimelineListItem'

export const TimelineList = () => {

    const { timeline } = useSelector(state => state.tweetReducer)
    
    return (
        <div className='TimelineList'>
            {
                timeline.map((tweet, key) => {
                    return <TimelineListItem key={key} tweet={tweet} />
                })
            }
        </div>
    )
}