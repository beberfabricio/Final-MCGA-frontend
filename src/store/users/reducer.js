import {    
    GET_USER_FULLFILLED,
    GET_USER_LOADING,
    GET_USER_REJECTED
} from './types'

const INITIAL_STATE = {
    data: null,
    isLoading: false,
    isError: false
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_FULLFILLED:
            return {
                ...state,
                data: action.payload,
                isError: false,
                isLoading: false
            };

        case GET_USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case GET_USER_REJECTED: 
            return {
                ...state,
                isError: true,
                data: action.payload,
                isLoading: false
            }
        default: return state;
    }
}

export default usersReducer