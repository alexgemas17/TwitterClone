import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadNewTimeline } from '../../actions/tweet'
import { db } from '../../firebase/config'
import { TimelineListItem } from './TimelineListItem'

export const TimelineList = ({UserDataUID, CollectionFromDB}) => {

    const dispatch = useDispatch()
    const { timeline } = useSelector(state => state.tweetReducer)

    console.log(timeline)

    useEffect(() => {
        // Cargamos los tweets
        db.collection(`users/${UserDataUID}/${CollectionFromDB}`)
        .onSnapshot(function(snapshot) {
            if(snapshot.docChanges().length > 0){
                dispatch( LoadNewTimeline( UserDataUID, CollectionFromDB))
            }
        });
    }, [UserDataUID, CollectionFromDB, timeline, dispatch])

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
