import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsersThunk } from '../../store/users/thunks'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styles from '../Form/form.module.css'

const Form = () => {
    const [success, setSuccess] = useState(false);
    const usersSelector = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {    
        await dispatch(getUsersThunk(data));
        const status = JSON.parse(localStorage.data).msg;
        console.log(status)
        setSuccess(true)
    };

    // if (usersSelector.isLoading) {
    //     return(
    //         <div className={styles.content}>
    //             <h1 className={styles.savingText}>Loging in...</h1>
    //             <img className={styles.gif} src={'../img/loading.gif'} alt={'loading logo'} />
    //         </div>
    //     )
    // }


    // if (usersSelector.isError) {
    //     return(
    //         <div className={styles.content}>
    //             <h1 className={styles.savingText}>Error loging in</h1>
    //             <img className={styles.gif} src={'../img/error.gif'} alt={'error logo'} />
    //         </div>
    //     )
    // }

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
        </div>
    </form>
  )
}

export default Form