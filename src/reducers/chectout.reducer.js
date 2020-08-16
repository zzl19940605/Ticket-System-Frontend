import {ADD_TICKETORDER, GET_TICKETORDER} from "../actions/checkout.action";


export function checkoutReducer(state = null, action){

    switch (action.type){
        case GET_TICKETORDER:
            console.log(action.payload);
            return action.payload.data;
        case ADD_TICKETORDER:
            if (action.payload.success) {
                return [...state, action.payload.newTicketOrder]
            }
            return state;
        default:
            return state;
    }
}