import {ADD_TEAM, GET_TEAMS} from "../actions/teams.action";

export function teamsReducer (state = null, action){

    switch (action.type){
        case GET_TEAMS:
            console.log(action.payload);
            return action.payload.data;
        case ADD_TEAM:
            if (action.payload.success) {
                return [...state, action.payload.new]
            }
            return state;
        default:
            return state;
    }
}