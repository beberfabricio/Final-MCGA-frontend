import { useNavigate } from 'react-router-dom';
import {
    getUser,    
    getUserLoading,
    getUserError
} from './actions'

export const getUsersThunk = (data) => async (dispatch) => {
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

export const verifyTokenThunk = () => async () => {
    const navigate = useNavigate();
    const userLogged = JSON.parse(localStorage.data);
    try {
        const response = await fetch('https://final-mcga-backend.vercel.app/users/verifyToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userLogged.token
            }
        })
        if (response.status === 401) {
            localStorage.setItem('data','{"msg":"Non-logged user"}')
            navigate('/login');
        }
    } catch (error) {
        return;
    }
}