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
    try {
        dispatch(addDataLoading(true));
        const response = await fetch('https://final-mcga-backend.vercel.app/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
    try {
        dispatch(editDataLoading(true));
        const response = await fetch(`https://final-mcga-backend.vercel.app/products/update/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(editData(productResponse));
        dispatch(editDataLoading(false));
    } catch (error) {
        dispatch(editDataError());
    }
}

export const deleteDataThunk = (id) => async (dispatch) => {
    try {
        dispatch(deleteDataLoading(true));
        const response = await fetch(`https://final-mcga-backend.vercel.app/products/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTkzNmRkMDkyYjE0MTIxN2FlZDM2NyIsImlhdCI6MTY3MDk4NTUyMywiZXhwIjoxNjcwOTg2MTIzfQ.o_eQ-3jq9ZFi2w8VgfdmDDcJ9HmrBWoN3v5-6dB4E2s',
            },
        });
        if (response.status !== 200) throw new Error(response.json());
        dispatch(deleteData(id));
        dispatch(deleteDataLoading(false));
        dispatch(loadDataThunk());
    } catch (error) {
        dispatch(deleteDataError());
    }
}