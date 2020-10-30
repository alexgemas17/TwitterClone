import React from 'react'
import { WriteTweetsComponent } from '../Tweets/WriteTweetsComponent'
import { HeaderTimelineComponent } from './HeaderTimelineComponent'
import { TimelineList } from './TimelineList'

export const TimelineComponent = () => {
    return (
        <div className='Timeline'>
            <HeaderTimelineComponent />

            <WriteTweetsComponent />

            <hr />

            <TimelineList />
        </div>
    )
}
