import React from 'react'
import { useSelector } from 'react-redux'
import { WriteTweetsComponent } from '../Tweets/WriteTweetsComponent'
import { HeaderTimelineComponent } from './HeaderTimelineComponent'
import { TimelineList } from './TimelineList'

export const TimelineComponent = () => {

    const { UserData } = useSelector(state => state.authReducer)

    return (
        <div className='Timeline'>
            <HeaderTimelineComponent />

            <WriteTweetsComponent />

            <hr />

            <TimelineList UserDataUID={UserData.UID} CollectionFromDB={'Timeline'} />
        </div>
    )
}
