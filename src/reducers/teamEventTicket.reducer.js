import {
    ADD_TEAMEVENTTICKETS,
    GET_TEAMEVENTTICKETS,
    GET_TEAMEVENTTICKETBYTEAMEVENTID
} from "../actions/teamEventTicket.action";


export function teamEventTicketReducer(state = null,action){

    switch (action.type){
        case GET_TEAMEVENTTICKETS:
            console.log(action.payload);
            return action.payload.data;
        // return newState;
        case GET_TEAMEVENTTICKETBYTEAMEVENTID:
            console.log(action.payload);
            return action.payload.data;
        case ADD_TEAMEVENTTICKETS:
            if (action.payload.success) {
                return [...state, action.payload.newTeamEventTicket]
            }
            return state;
        default:
            return state;
    }
}