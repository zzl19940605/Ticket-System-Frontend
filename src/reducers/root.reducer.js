import {combineReducers} from "redux";

import {reducer as formReducer} from "redux-form";

import {teamsReducer} from "./teams.reducer";
import {teamEventsReducer} from "./teamEvents.reducer";
import {teamEventTicketReducer} from "./teamEventTicket.reducer";
import {checkoutReducer} from "./chectout.reducer";
import {authReducer} from "./auth.reducer";
import {checkReducer} from "./check.reducer";
export const rootReducer = combineReducers({
    // user: loginReducer,
    teams: teamsReducer,
    auth: authReducer,
    teamEvents: teamEventsReducer,
    teamEventTicket:  teamEventTicketReducer,
    checkout: checkoutReducer,
    check: checkReducer,
    form: formReducer //provide store to redux form
});