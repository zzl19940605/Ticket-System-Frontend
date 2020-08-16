import {LOGIN,LOGOUT,REGISTER} from "../actions/auth.action";

export function authReducer(state = null, action){
    console.log('state:',state,'action',action);
    switch(action.type){
        case LOGIN:
            // return action.payload.success ? action.payload.user : null;
            return action.payload.success ? action.payload : null;
        case LOGOUT:
            // return action.payload.success;
            return null;
        case REGISTER:
            return null;
        default:
            return state;
    }
}