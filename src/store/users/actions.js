import {    
    GET_USER_FULLFILLED,
    GET_USER_LOADING,
    GET_USER_REJECTED
} from './types'

export const getUser = (data) => {
    return {
        type: GET_USER_FULLFILLED,
        payload: data,
    };
};

export const getUserLoading  = () => {
    return {
        type: GET_USER_LOADING,
    };
};


export const getUserError = (data) => {
    return {
        type: GET_USER_REJECTED,
        payload: data
    };
};