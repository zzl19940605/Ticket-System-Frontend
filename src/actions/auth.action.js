import axios from 'axios';
import * as qs from 'qs';
export const LOGIN='LOGIN';
export const LOGOUT='lOGOUT';
export const REGISTER='REGISTER';
const url = 'http://localhost:8080';

export function login(user,redirtfun){
    const loginPromise = axios.post(`${url}/login `,
        qs.stringify((user), {withCredentials:true})
    )
        .then(res => {
             console.log(res);
            redirtfun(res);

            return {
                user: res.data.user,
                type: res.data.user.profiles.map(e=>{
                    return e.type;
                }),
                loginReady: true,
                success: res.data.success
            };
        });
        // .catch(err=>{
        //     // console.log(err);
        //     return {
        //         success:false
        //     };
        // });
    return {
        type: LOGIN,
        payload: loginPromise

    }
}

export function logout(logoutfun) {
    const logoutPromise = axios.post(`${url}/logout`, {withCredentials: true})
        .then(res => {
            logoutfun();
            return {
                user: res.data.user,
                success: res.data.success
            };
        })
        .catch(err =>{
            return {
                success: false
            };
        });
    // return {
    //     type: LOGOUT,
    //     payload: logoutPromise
    // }
    return null;
}
// export function register(userinfo, backfun){
//     const registerPromise = axios.post(`${url}/users`,userinfo)
//         .then(res => {
//             const userId =Number(res.date.message);
//             let
//         })
// }

export function register(userinfo, refun) {
    const registerPromise = axios.post(`${url}/users`, userinfo)
        .then(res => {

            console.log(res);

            let newUser={
                zip: res.data.message,
                name:userinfo.name,
                email:userinfo.email,
                phone:userinfo.phone,
            };
            return axios.post(`${url}/user-details`,newUser);
                // user: res.data.user,
                // success: res.data.success
        })
        .then(res=>{
            refun();
            return {success: res.data.success};
        })
        .catch(err =>{
            return {
                success: false
            };
        });
    return {
        type: REGISTER,
        payload: registerPromise
    }
}