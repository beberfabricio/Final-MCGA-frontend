import { 
    LOAD_DATA_FULLFILLED, 
    LOAD_DATA_LOADING, 
    LOAD_DATA_REJECTED,
    ADD_DATA_FULLFILLED,
    ADD_DATA_LOADING,
    ADD_DATA_REJECTED,
    EDIT_DATA_FULLFILLED,
    EDIT_DATA_LOADING,
    EDIT_DATA_REJECTED,
    DELETE_DATA_FULLFILLED,
    DELETE_DATA_LOADING,
    DELETE_DATA_REJECTED
} from './types'

export const loadData = (data) => {
    return {
        type: LOAD_DATA_FULLFILLED,
        payload: data
    };
};

export const loadDataLoading = (isLoading) => {
    return{
        type: LOAD_DATA_LOADING,
        payload: isLoading
    };
};

export const loadDataError = () => {
    return {
      type: LOAD_DATA_REJECTED,
    };
};

export const addData = (data) => {
    return {
        type: ADD_DATA_FULLFILLED,
        payload: data
    };
};

export const addDataLoading = (isLoading) => {
    return{
        type: ADD_DATA_LOADING,
        payload: isLoading
    };
};

export const addDataError = () => {
    return {
      type: ADD_DATA_REJECTED,
    };
};

export const editData = (data) => {
    return {
        type: EDIT_DATA_FULLFILLED,
        payload: data
    };
};

export const editDataLoading = (isLoading) => {
    return{
        type: EDIT_DATA_LOADING,
        payload: isLoading
    };
};

export const editDataError = () => {
    return {
      type: EDIT_DATA_REJECTED,
    };
};

export const deleteData = (data) => {
    return {
        type: DELETE_DATA_FULLFILLED,
        payload: data
    };
};

export const deleteDataLoading = (isLoading) => {
    return{
        type: DELETE_DATA_LOADING,
        payload: isLoading
    };
};

export const deleteDataError = () => {
    return {
      type: DELETE_DATA_REJECTED,
    }
};