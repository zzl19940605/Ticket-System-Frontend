import axios from 'axios';
export const GET_TICKETORDER = 'GET_TICKETORDER';
export const ADD_TICKETORDER = 'ADD_TICKETORDER';
const url = 'http://localhost:8080';

export function getTicketOrder(){
    const getTicketOrderPromise = axios.get(`${url}/ticketOrder`);
    return {
        type: GET_TICKETORDER,
        payload: getTicketOrderPromise
    };
}

export function addTicketOrder(ticketOrder, succeed, fail){
    const addTicketOrderPromise = axios.post(`${url}/checkout`,ticketOrder)
        .then(res=>{
            console.log('res',res);
            res.data.success ? succeed('add correct') : fail('add failed');
            return {
                success: res.data.success,
                newTicketOrder: ticketOrder
            }
        })
        .catch(err=> {
            fail('add ticket order failed');
            return {
                success: false
            };
        });

    return {
        type: ADD_TICKETORDER,
        payload: addTicketOrderPromise
    };
}