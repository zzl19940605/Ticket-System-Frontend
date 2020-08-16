import {REGISTER} from "./auth.action";
import axios from "axios/index";
import {ADD_TEAMEVENTTICKETS} from "./teamEventTicket.action";
export const GET_ORDER='GET_ORDER';
export const CHECK_OUT='CHECK_OUT';

const url = 'http://localhost:8080';
export function getOrder(){
    const getOrderPromise = axios.get(`${url}/order`);
    return {
        type: GET_ORDER,
        payload: getOrderPromise
    };
}

export function checkOut(info, succeed, fail) {
    console.log(info);
    const checkOutPromise = axios.post(`${url}/order`, info)
        .then(res=>{
            console.log('res',res);
            res.data.success ? succeed('add correct') : fail('add failed');
            return {
                success: res.data.success,
                newOrder: info
            }
        })
        .catch(err=> {
            fail('buy failed');
            return {
                success: false
            };
        });
    return {
        type: CHECK_OUT,
        payload: checkOutPromise
    }
}