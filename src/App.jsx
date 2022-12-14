import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './screens/Home'
import Products from './screens/Products'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/products' element= { <Products /> } />
        <Route path='*' element={ <Navigate to='/home' /> } />
      </Routes>
    </Layout>
  );
}

export default App;