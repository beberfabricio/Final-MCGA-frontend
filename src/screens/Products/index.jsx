import React, { useEffect } from 'react'
import styles from './products.module.css'
import ProductList from '../../components/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataThunk } from '../../store/products/thunks'
import { Link } from 'react-router-dom'
import Gif from '../../components/Gif'

const Products = () => {
  const productsSelector = useSelector(state => state.products)
  const user = JSON.parse(localStorage.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataThunk())
  }, [dispatch])

  if (productsSelector.isLoading) {
    return <Gif status={'Loading'} title={'Loading products...'} width={300} />
  }

  if (productsSelector.isError) {
    return <Gif status={'Error'} title={'Error loading products'} width={250} />
  }

  if (productsSelector.data.length === 0) {
    return (
      <div className={styles.content}>
      <h1 className={styles.title}>Products View</h1>
      <div className={styles.productsList}>
        <h3 className={styles.noProducts}>No hay productos :C</h3>
      </div>
        <Link to='/products/add'>Nuevo producto</Link>
      </div>
    )
  }

    return (
    <div className={styles.content}>
      <h1 className={styles.title}>Products View</h1>
      <div className={styles.productsList}>
        <ProductList products={productsSelector.data} />
      </div>
      { user.msg === 'User logged' ? <Link to='/products/add'>Nuevo producto</Link>
      : <></>
      }
    </div>
  )

}

export default Products;