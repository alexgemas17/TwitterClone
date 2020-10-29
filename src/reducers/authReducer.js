import { types } from "../types";

const initialState = {

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                UserData: {
                    UID: action.payload.uid,
                    UserName: action.payload.userName,
                    DisplayName: action.payload.displayName,
                    PhotoURL: action.payload.photoURL
                }
            }

        case types.logout:
           return {}
    
        default:
            return state;
    }
}