import {ADD_TEAMEVENTS, EDIT_TEAMEVENTS, GET_TEAMEVENTS,GET_TEAMEVENTSBYTEAMID,DELETE_TEAMEVENTSBYEVENTDATE} from "../actions/teamEvents.action";

export function teamEventsReducer (state = null, action){

    switch (action.type){
        case GET_TEAMEVENTS:
            console.log(action.payload);
            return action.payload.data;

        case GET_TEAMEVENTSBYTEAMID:
            console.log(action.payload);
            return action.payload.data;

        case ADD_TEAMEVENTS:
            if (action.payload.success && state) {
                return [...state, action.payload.new]
            }
            return state;
        case EDIT_TEAMEVENTS:
            if (action.payload.success && state) {
                return [...state, action.payload.new]
            }
            return state;
        case DELETE_TEAMEVENTSBYEVENTDATE:
            if (action.payload.success && state) {
                return [...state, action.payload.new]
            }
            return state;

        default:
            return state;

    }
}