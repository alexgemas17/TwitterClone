import { types } from "../types";

const initialState = {
    timeline: []
}

export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.createTweet): 
            return {
                timeline: [action.payload, ...state.timeline]
            }
        case types.loadTimeline:
            return {
                timeline: action.payload
            }
        case types.cleanTimeline: 
            return {
                timeline: []
            }

        case types.addTweetsToTimeline: 
            return {
                timeline: action.payload
            }

        case types.addTweet:
            if(state.timeline.find(tweet => tweet.tweetUID !== action.payload.tweetUID)){
                return {
                    timeline: [ action.payload, ...state.timeline]
                }
            } else if(state.timeline.length < 1) {
                return {
                    timeline: [ action.payload, ...state.timeline]
                }
            }else {
                return state;
            }

        default:
            return state;
    }
}