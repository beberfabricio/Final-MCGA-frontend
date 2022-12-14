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

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOAD_DATA_FULLFILLED:
            return {
                ...state,
                data: action.payload,
                isError: false
            };
        case LOAD_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case LOAD_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };
        case ADD_DATA_FULLFILLED:
            return{
                ...state,
                data: [...state.data, action.payload],
                isError: false
            };
        case ADD_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload
            };
        case ADD_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };
        case EDIT_DATA_FULLFILLED:
            return{
                ...state,
                data: state.data.map((x) => {
                    if (x._id === action.payload._id) {
                        return action.payload;
                    }
                    return x;
                }),
                isError: false
            };
        case EDIT_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload
            };
        case EDIT_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            };
        case DELETE_DATA_FULLFILLED:
            return {
                ...state,
                data: state.data.filter(x => x.id !== action.payload)
            };
        case DELETE_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case DELETE_DATA_REJECTED:
            return {
                ...state,
                isError: true,
                isLoading: false
            };
        default:
            return state;
    }
}

export default productsReducer;