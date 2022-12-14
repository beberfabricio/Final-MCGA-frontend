import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDataThunk, editDataThunk } from '../../store/products/thunks'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styles from './form.module.css'
import Gif from '../Gif'

const Form = (props) => {
    const [success, setSuccess] = useState(false);
    const productsSelector = useSelector((state) => state.products)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            name: props.product.name,
            description: props.product.description,
            price: props.product.price,
            stock: props.product.stock,
            category: props.product.category
        }
    });
    let onSubmit = null;
    
    if (props.type === 'Crear') {
        onSubmit = data => {    
            dispatch(addDataThunk(data));
            setSuccess(true)
        };
    }
    else if (props.type === 'Editar'){
        onSubmit = data => {   
            data._id = props.product._id;
            dispatch(editDataThunk(data));
            setSuccess(true)
        };
    }

    if (productsSelector.isLoading) {
        return <Gif status={'Loading'} title={'Saving product...'} width={250} />
    }


    if (productsSelector.isError) {
        return <Gif status={'Error'} title={'Error saving products'} width={250} />
    }

    if (productsSelector.data && success) {
        navigate('/products')
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.formTitle}>{props.type} Producto</h2>
        <div className={styles.formContainer}>
            <fieldset className={styles.formGroup}>
                <input placeholder=" " className={styles.formTxt} type={"text"} {...register("name",{required: true, maxLength:20})}/>
                <label className={styles.formLblTxt}>Nombre</label>
                {errors.name && <span className={styles.formLblError}>Debe ingresar un nombre válido</span>}
            </fieldset>

            <fieldset className={styles.formGroup}>
                <textarea className={styles.formTxt} cols="30" rows="3" placeholder=" " type={"textarea"} {...register("description",{maxLength: 80})}></textarea>
                <label className={styles.formLblTxt}>Descripcion</label>
                {errors.description && <span className={styles.formLblError}>No puede superar los 80 caracteres</span>}
            </fieldset>

            <fieldset className={styles.formGroup}>
                <input placeholder=" " className={styles.formTxt} type={"number"} {...register("price",{required: true, min: 0})}/>
                <label className={styles.formLblTxt}>Precio</label>
                {errors.price && <span className={styles.formLblError}>Debe ingresar un precio válido</span>}
            </fieldset>

            <fieldset className={styles.formGroup}>
                <input placeholder=" " className={styles.formTxt} type={"number"} {...register("stock",{min: 0})}/>
                <label className={styles.formLblTxt}>Stock</label>
                {errors.stock && <span className={styles.formLblError}>Debe ingresar un stock válido</span>}
            </fieldset>
            
            <fieldset className={styles.formGroup}>
                <h3>Categoria</h3>
                <select className={styles.formSelect} {...register("category")}>
                    <option value="drink">Bebida</option>
                    <option value="meat">Carne</option>
                    <option value="vegetable">Verdura</option>
                </select>
            </fieldset>
            <button className={styles.formBtn} type="submit">{props.type}</button>
        </div>
    </form>
  )
}

export default Form