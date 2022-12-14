import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteDataThunk } from '../../store/products/thunks';
import styles from './modal.module.css'

const Button = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const deleteProduct = () => {
        dispatch(deleteDataThunk(props.product._id))
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const modalBody = (
        <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Confirmación</h2>
        <p className={styles.modalText}>¿Seguro que quieres eliminar este producto?</p>
        <button onClick={deleteProduct} className={styles.modalBtn}>Confirmar</button>
        <button onClick={toggleModal} className={styles.modalBtn}>Cancelar</button>
        </div>
    )

    const handleClick = () => {
        switch(props.type){
            case 'edit':
                navigate(`/products/edit/${props.product._id}`)
            break;
            case 'delete':
                toggleModal()
            break;
            default:
                navigate('/products')
                break;
        }
    }

    return (
        <>
            <button onClick={handleClick}><img src={`../img/${props.type}.png`} alt={`${props.type} logo`} /></button>
            {
                modal ? <section className={styles.modalShow}> {modalBody} </section>
                : <section className={styles.modal}> {modalBody} </section>
            }
        </>
    )
}

export default Button