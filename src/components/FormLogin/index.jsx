import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsersThunk } from '../../store/users/thunks'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styles from '../Form/form.module.css'
import Gif from '../Gif'

const Form = () => {
    const [success, setSuccess] = useState(false);
    const usersSelector = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {    
        await dispatch(getUsersThunk(data));
        setSuccess(true)
    };

    if (usersSelector.isLoading) {
        return <Gif status={'Loading'} title={'Loging in...'} width={250} />
    }

    if (success && usersSelector.data.msg === 'User logged') {
        navigate('/products')
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.formTitle}>Ingresar</h2>
        <div className={styles.formContainer}>
            <fieldset className={styles.formGroup}>
                <input placeholder=" " className={styles.formTxt} type={"email"} {...register("email",{required: true})}/>
                <label className={styles.formLblTxt}>Email</label>
                {errors.email && <span className={styles.formLblError}>Debe ingresar un e-mail válido</span>}
            </fieldset>

            <fieldset className={styles.formGroup}>
                <input placeholder=" " className={styles.formTxt} type={"password"} {...register("password",{required: true})}/>
                <label className={styles.formLblTxt}>Contraseña</label>
                {errors.password && <span className={styles.formLblError}>Debe ingresar una contraseña válida</span>}
            </fieldset>

            <button className={styles.formBtn} type="submit">Iniciar sesión</button>

            { usersSelector.isError ? <span className={styles.formLblError}>{usersSelector.data.msg}</span>
            : <></>
            }
        </div>
    </form>
  )
}

export default Form