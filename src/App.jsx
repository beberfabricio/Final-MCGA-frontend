import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './screens/Home'
import Products from './screens/Products'
import AddProduct from './screens/AddProduct'
import EditProduct from './screens/EditProduct'
import Login from './screens/Login'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/products' element= { <Products /> } />
        <Route path='/products/add' element= { <AddProduct />} />
        <Route path='/products/edit/:id' element= { <EditProduct />} />
        <Route path='/login' element= { <Login />} />
        <Route path='*' element={ <Navigate to='/home' /> } />
      </Routes>
    </Layout>
  );
}

export default App;