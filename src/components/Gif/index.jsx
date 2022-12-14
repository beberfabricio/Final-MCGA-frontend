import React from 'react'
import styles from './gif.module.css'

const Gif = (props) => {
    if (props.status === 'Loading') {
        return(
            <div className={styles.content}>
                <h1 className={styles.title}>{props.title}</h1>
                <img className={styles.gif} src={'../img/loading.gif'} alt={'loading logo'} style={{width: props.width}} />
            </div>
        )
    } else if (props.status === 'Error') {
        return(
            <div className={styles.content}>
                <h1 className={styles.title}>{props.title}</h1>
                <img className={styles.gif} src={'../img/error.gif'} alt={'error logo'} style={{width: props.width}} />
            </div>
        )
    }
}

export default Gif