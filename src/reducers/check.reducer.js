import {CHECK_OUT, GET_ORDER} from "../actions/check.action";
import {ADD_TEAMEVENTS} from "../actions/teamEvents.action";

export function checkReducer(state = null, action){

    switch (action.type){
        case GET_ORDER:
            console.log(action.payload);
            return action.payload.data;
        // case ADD_TICKETORDER:
        //     if (action.payload.success) {
        //         return [...state, action.payload.newTicketOrder]
        //     }
        //     return state;

        case CHECK_OUT:
            if (action.payload.success && state) {
                return [...state, action.payload.new]
            }
            return state;
        default:
            return state;
    }
}