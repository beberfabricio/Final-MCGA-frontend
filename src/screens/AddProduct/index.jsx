import React from 'react'
import Form from '../../components/Form'

const AddProduct = () => {
  const productEmpty = {
    name: '',
    description: '',
    price: '',
    stock: '',
  }

  return (
    <Form product={productEmpty} type={'Crear'} />
  )
}

export default AddProduct