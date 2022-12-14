import React from "react"
import styles from "./layout.module.css"
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>MCGA 2022</h1>
                <nav>                    
                    <Link to='/home'>Home</Link>
                    <Link to='/products'>Products</Link>
                </nav>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Examen Final MCGA 2022 - Universidad Abierta Interamericana</p>
            </footer>
        </div>
    )
}

export default Layout;