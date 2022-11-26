import { RETRIEVE_USER } from "./type";
import UserService from  './../services/UserService.jsx'

export const retrieveUsers = () => 
async(dispatch) => {
    try {
        const res = await UserService.getAll();
        console.log(res);
        dispatch({
            type:RETRIEVE_USER,
            payload:res
        })
    } catch (error) {
        console.log(error);
    }
}

export const retrieveUserslogin = (formData) => 
async(dispatch) => {
    try {
        const res = await UserService.loginUserData(formData);
        console.log(res);
        dispatch({
            type:RETRIEVE_USER,
            payload:res
        })
    } catch (error) {
        console.log(error);
    }
}