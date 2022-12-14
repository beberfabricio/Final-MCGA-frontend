import React from "react"
import styles from "./layout.module.css"
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({children}) => {
    const user = JSON.parse(localStorage.data)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.data = '{"msg":"Non-logged user"}'
        navigate('/');
    }
    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>MCGA 2022</h1>
                <nav>                    
                    <Link to='/home'>Home</Link>
                    <Link to='/products'>Products</Link>
                    { user.msg === 'User logged' ? <button onClick={handleLogout} className={styles.logout}>Logout</button>
                    : <Link to='/login'>Login</Link>
                    }
                    
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