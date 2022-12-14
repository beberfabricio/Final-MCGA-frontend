import {
    getUser,    
    getUserLoading,
    getUserError
} from './actions'

export const getUsersThunk = (data) => async (dispatch) => {
    console.log(JSON.stringify(data))
    dispatch(getUserLoading());
    try {
        const response = await fetch('https://final-mcga-backend.vercel.app/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        const json = await response.json();        
        localStorage.setItem("data", JSON.stringify(json));
        if (response.status !== 200) 
            return dispatch(getUserError(json));
        
        dispatch(getUser(json));
    } catch (error) {
        dispatch(getUserError(error));
    }
}