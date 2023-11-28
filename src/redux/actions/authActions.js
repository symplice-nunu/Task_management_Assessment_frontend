import axios from "axios";
import { login } from "../slices/authSlices";

export const loginAction = (payload) => async (dispatch, getState) => {
    try {
        const results = await axios.post('/login', payload);
        dispatch(login(results.data));
    } catch (error) {
        console.log(error);
    }
}

export const signupAction = (payload) => async (dispatch, getState) => {
    try {
        const results = await axios.post('/signup', payload);
        console.log(results.data);
    } catch (error) {
        console.log(error)
    }
}
