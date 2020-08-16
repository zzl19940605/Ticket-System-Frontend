import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReduxPromise from 'redux-promise';
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root.reducer";
import Login from "./containers/login";
import Logout from "./containers/logout";
import Register from "./containers/Register"
import Teams from "./containers/Teams";
import ABC from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import check from "./containers/check";
import AddTeam from "./containers/AddTeam";
import AddTeamEvent from "./containers/AddTeamEvent";
import EditTeamEvent from "./containers/EditTeamEvent";
import teamEvents from "./containers/teamEvents";
import teamEventTicket from "./containers/teamEventTicket"
import ticketDetail from "./containers/ticketDetail"
import Checkout from "./containers/checkout";
import DeleteTeamEvent from "./containers/DeleteTeamEvent";
import Order from "./containers/Order";

import authorize from "./components/authorize.hoc";

ReactDOM.render(<App />, document.getElementById('root'));


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <ABC>

                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    {/*<Route path="/users" component={authorize(Register, 'admin')}/>*/}

                    <Route path="/users" component={Register}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/check" component={check}/>
                    <Route path="/add-team" component={AddTeam}/>
                    <Route path="/add-teamEvent" component={AddTeamEvent}/>
                    <Route path="/edit-teamEvent/:id" component={EditTeamEvent}></Route>
                    <Route path="/delete-teamEvent" component={DeleteTeamEvent}/>
                    <Route path="/teamEvents/teamId/:id" component={teamEvents}/>
                    <Route path="/teamEventTicket/teamEventId/:id" component={teamEventTicket}/>
                    <Route path="/ticketDetail/:id" component={ticketDetail}/>
                    <Route path="/checkOut" component={Checkout}/>
                    <Route path="/teams" component={Teams}/>
                    {/*<Route path="/teams" component={guard(Teams)}/>*/}
                    <Route component={Teams}/>

                </Switch>
            </ABC>
        </BrowserRouter>
    </Provider>

    , document.querySelector('#root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
