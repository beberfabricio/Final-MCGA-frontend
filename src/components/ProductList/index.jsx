import React from 'react'
import styles from './product.module.css'
import Button from '../Button'

const Product = ({products}) => {
    console.log(products)
    return (
    <>
    {
    products.map(x => {
        return (
            <div key={x._id} className={styles.product}>
                <h3>{x.name}</h3>
                <p className={styles.description}>{x.description}</p>
                <p>Price: <span>${x.price}</span></p>
                <p>Stock: <span>{x.stock}</span></p>
                <p>Category: <span>{x.category}</span></p>
                <span className={styles.btn}>
                    <Button product={x} type={'edit'} />
                    <Button product={x} type={'delete'} />
                </span>
            </div>
        )}
    )
    }
    </>
    )
}

export default Product;