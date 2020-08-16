import axios from 'axios';
export const GET_TEAMS='GET_TEAMS';
export const ADD_TEAM='ADD_TEAM';

const url = 'http://localhost:8080';
export function getTeams(){
    const getTeamPromise = axios.get(`${url}/teams`);
    return {
        type: GET_TEAMS,
        payload: getTeamPromise
    };
}

export function addTeam(team, succeed, fail){
    const addTeamPromise = axios.post(`${url}/teams`, team)
        .then(res=>{
            console.log('res',res);
            res.data.success ? succeed('add correct') : fail('add failed')
            return {
                success: res.data.success,
                newTeam: team
            };
        })
        .catch(err => {
            fail('add product failed');
            return {
                success: false
            };
        });
    return {
        type: ADD_TEAM,
        payload: addTeamPromise
    }
}