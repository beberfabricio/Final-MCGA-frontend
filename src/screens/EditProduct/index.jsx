import React, { useEffect } from 'react'
import Form from '../../components/Form'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.data)

    useEffect(() => {
        if (user.msg !== 'User logged') {
            navigate('/login');
        }
    }, [user, navigate])

    const productsSelector = useSelector((state) => state.products);
    
    if (productsSelector.data.length === 0) {
        return 
    }

    const idToEdit = window.location.pathname.split('/')[3];

    const productToEdit = productsSelector.data.filter(x => {
        return x._id === idToEdit
    })[0]
    
    return (
        <Form product={productToEdit} type='Editar' />
    )
}

export default EditProduct