import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteDataThunk } from '../../store/products/thunks';

const Button = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        const user = JSON.parse(localStorage.data)
        switch(props.type){
            case 'edit':
                navigate(`/products/edit/${props.product._id}`)
            break;
            case 'delete':
                dispatch(deleteDataThunk(props.product._id))
            break;
            default:
                navigate('/products')
                break;
        }
    }

    return (
        <button onClick={handleClick}><img src={`../img/${props.type}.png`} alt={`${props.type} logo`} /></button>
    )
}

export default Button