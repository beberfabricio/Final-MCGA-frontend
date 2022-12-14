import React, { useEffect } from 'react'
import Form from '../../components/Form'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.data)

  useEffect(() => {
    if (user.msg !== 'User logged') {
        navigate('/login');
    }
  }, [user, navigate])

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