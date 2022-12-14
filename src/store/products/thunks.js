import {
    loadData,
    loadDataLoading,
    loadDataError,
    addData,
    addDataLoading,
    addDataError,
    editData,
    editDataLoading,
    editDataError,
    deleteData,
    deleteDataLoading,
    deleteDataError
} from './actions'

export const loadDataThunk = () => async (dispatch) => {
    try {
        dispatch(loadDataLoading(true));
        const response = await fetch('https://final-mcga-backend.vercel.app/products');
        const productsResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(loadData(productsResponse));
        dispatch(loadDataLoading(false));
    } catch (error) {
        dispatch(loadDataError());
    }
}

export const addDataThunk = (product) => async (dispatch) => {
    const userLogged = JSON.parse(localStorage.data);
    try {
        dispatch(addDataLoading(true));
        const response = await fetch('https://final-mcga-backend.vercel.app/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userLogged.token
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        if (response.status !== 201) throw new Error('Error');
        dispatch(addData(productResponse));
        dispatch(addDataLoading(false));
    } catch (error) {
        dispatch(addDataError());
    }
}

export const editDataThunk = (product) => async (dispatch) => {
    const userLogged = JSON.parse(localStorage.data);
    try {
        dispatch(editDataLoading(true));
        const response = await fetch(`https://final-mcga-backend.vercel.app/products/update/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userLogged.token
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        dispatch(editData(productResponse));
        dispatch(editDataLoading(false));
        if (response.status !== 200) throw new Error('Error');
    } catch (error) {
        dispatch(editDataError());
    }
}

export const deleteDataThunk = (id) => async (dispatch) => {
    const userLogged = JSON.parse(localStorage.data);
    try {
        dispatch(deleteDataLoading(true));
        const response = await fetch(`https://final-mcga-backend.vercel.app/products/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': userLogged.token
            },
        });
        if (response.status !== 200) {
            throw new Error(response.json());
        }
        dispatch(deleteData(id));
        dispatch(deleteDataLoading(false));
        dispatch(loadDataThunk());
    } catch (error) {
        dispatch(deleteDataError());
    }
}