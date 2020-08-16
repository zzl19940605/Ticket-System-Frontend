import axios from 'axios';
export const GET_TEAMEVENTS='GET_TEAMEVENTS';
export const GET_TEAMEVENTSBYTEAMID='GET_TEAMEVENTSBYTEAMID';
export const ADD_TEAMEVENTS='ADD_TEAMEVENTS';
export const EDIT_TEAMEVENTS='EDIT_TEAMEVENTS';
export const DELETE_TEAMEVENTSBYEVENTDATE='DELETE_TEAMEVENTSBYEVENTDATE';

const url = 'http://localhost:8080';
export function getTeamEvents(){
    const getTeamEventsPromise = axios.get(`${url}/teamEvents`);
    return {
        type: GET_TEAMEVENTS,
        payload: getTeamEventsPromise
    };
}

export function getTeamEventsByTeamId(teamId){
    const getTeamEventsByTeamIdPromise = axios.get(`${url}/teamEvents/teamId/${teamId}`);
    //simply return the type and payload, return payload.data in reducer
    console.log(getTeamEventsByTeamIdPromise);
    return {
        type: GET_TEAMEVENTSBYTEAMID,
        payload: getTeamEventsByTeamIdPromise
    };
}

export function addTeamEvents(teamEvents, succeed, fail,callback){
    console.log('sssss',teamEvents);
    const addTeamEventsPromise = axios.post(`${url}/teamEvents`, teamEvents)
        .then(res=>{
            console.log('res',res);
            callback();
            res.data.success ? succeed('add correct') : fail('add failed')
            return {
                success: res.data.success,
                newTeam: teamEvents
            };
        })
        .catch(err => {
            fail('add teamEvents failed');
            return {
                success: false
            };
        });
    return {
        type: ADD_TEAMEVENTS,
        payload: addTeamEventsPromise
    }
}

export function editTeamEvents(teamEvents,callback){
    const editTeamEventsPromise = axios.put(`${url}/teamEvents`,teamEvents)
        .then(res=>{
                callback();
                return {
                    success:res.data.success,
                    editedTeamEvents:teamEvents
                };
            }
        )
        .catch(err=>{
            return{
                success:false
            }
        });
    return {
        type:EDIT_TEAMEVENTS,
        payload:editTeamEventsPromise
    }
}


export function deleteTeamEventsByEventdate(eventdate){
    const deleteTeamEventsByEventdatePromise = axios.delete(`${url}/teamEvents/${eventdate}`);
    //simply return the type and payload, return payload.data in reducer
    console.log(deleteTeamEventsByEventdatePromise);
    return {
        type: DELETE_TEAMEVENTSBYEVENTDATE,
        payload: deleteTeamEventsByEventdatePromise
    };
}
