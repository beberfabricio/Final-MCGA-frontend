import React, { useEffect } from 'react'
import styles from './products.module.css'
import ProductList from '../../components/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataThunk } from '../../store/products/thunks'
import { Link } from 'react-router-dom'

const Products = () => {
  const productsSelector = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataThunk())
  }, [dispatch])

  if (productsSelector.isLoading) {
    return(
      <div className={styles.content}>
      <h1 className={styles.loadingText}>Loading products...</h1>
      <img className={styles.gif} src={'../img/loading.gif'} alt={'loading logo'} />
    </div>
    )
  }

  if (productsSelector.isError) {
    return(
      <div className={styles.content}>
      <h1 className={styles.loadingText}>Error loading products</h1>
      <img className={styles.gif} src={'../img/error.gif'} alt={'error logo'} />
    </div>
    )
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
      <Link to='/products/add'>Nuevo producto</Link>
    </div>
  )
}

export default Products