import {RETRIEVE_USER } from "./action/type.jsx"
const initialsState = []
const userReducer = (users=initialsState, action)=>{
    const {type, payload} = action;
    switch(type) {
        case RETRIEVE_USER:
            return payload
        default:
             return users    
    }
}

export default userReducer;