import axios from 'axios';

export const GET_TEAMEVENTTICKETS='GET_TEAMEVENTTICKETS';
export const ADD_TEAMEVENTTICKETS = 'ADD_TEAMEVENTTICKETS';
export const GET_TEAMEVENTTICKETBYTEAMEVENTID = 'GET_TEAMEVENTTICKETBYTEAMEVENTID';

const url = 'http://localhost:8080';
export function getTeamEventTicket(){
    const getTeamEventTicketPromise = axios.get(`${url}/teamEventTicket`);

    return {
        type: GET_TEAMEVENTTICKETS,
        payload: getTeamEventTicketPromise
    };
}
export function getTeamEventTicketByTeamEventId(teameventId){
    const getTeamEventTicketByTeamEventIdPromise = axios.get(`${url}/teamEventTicket/teameventId/${teameventId}`);
    //simply return the type and payload, return payload.data in reducer
    console.log(getTeamEventTicketByTeamEventIdPromise);
    return {
        type: GET_TEAMEVENTTICKETBYTEAMEVENTID,
        payload: getTeamEventTicketByTeamEventIdPromise
    };
}


export function addTeamEventTicket(teamEventTicket, succeed, fail){
    const addTeamEventTicketPromise = axios.post(`${url}/teamEventTicket`,teamEventTicket)
        .then(res=>{
            console.log('res',res);
            res.data.success ? succeed('add correct') : fail('add failed');
            return {
                success: res.data.success,
                newTeamEventTicket: teamEventTicket
            }
        })
        .catch(err=> {
            fail('add teamEventTicket failed');
            return {
                success: false
            };
        });
    return {
        type: ADD_TEAMEVENTTICKETS,
        payload: addTeamEventTicketPromise
    }
}