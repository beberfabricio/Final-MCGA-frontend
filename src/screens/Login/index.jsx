import React, { useEffect } from 'react'
import Form from '../../components/FormLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.data)
  if (user.msg === 'User logged') {
    navigate('/');
  }

  useEffect(() => {
    if (user.msg === 'User logged') {
      navigate('/');
    }
  }, [user, navigate])

  return (
    <Form />
  )
}

export default Login