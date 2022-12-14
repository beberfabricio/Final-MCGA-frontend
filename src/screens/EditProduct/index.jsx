import React from 'react'
import Form from '../../components/Form'
import { useSelector } from 'react-redux';

const EditProduct = () => {
    const productsSelector = useSelector((state) => state.products);

    const idToEdit = window.location.pathname.split('/')[3];

    const productToEdit = productsSelector.data.filter(x => {
        return x._id === idToEdit
    })[0]
    
    return (
        <Form product={productToEdit} type='Editar' />
    )
}

export default EditProduct