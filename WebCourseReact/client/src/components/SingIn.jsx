import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './SingIn.css'
import useHttp from '../hooks/httpHook'
import { useDispatch } from 'react-redux'
import { changeCheckRegistr } from '../store/userSlice'
import { useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

function Authentication() {

    const { loading, request } = useHttp();
    const [errMessage, setErrMessage] = useState('')
    let checkRegistr = useSelector(store => store.user.checkRegistr)

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    async function handelSingUp() {
        const response = await request('/auth/registr', 'POST', { ...form })
        if (!response.hasOwnProperty('err'))
            dispatch(changeCheckRegistr())

        console.log(response);
    }

    async function handelSingIn() {
        const response = await request('/auth/login', 'POST', { ...form })
        if (!response.hasOwnProperty('err')) {
            dispatch(changeCheckRegistr())
            // document.location.href = "/client-room";
        }

        setErrMessage(response.message)
    }

    function handleInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        checkRegistr ? (
            <Navigate to='/client-room' />
        ) : (
            <div className='singIn-container'>
                <div className='in-container'>
                    <h1 style={{ textAlign: 'center' }}>&bull; Вход &bull;</h1>
                    <div className="underline"></div>
                    <form action="#" method="post" id="registr-form">
                        <div>
                            <TextField className='fullWidth' label="Логин" />
                        </div>
                        <div>
                            <TextField style={{marginTop:30}} className='fullWidth' label="Пароль" />
                        </div>
                    </form>
                    <div className='btns'>
                        <Button onClick={handelSingUp} variant="contained" color="secondary">Вход</Button>
                        <div>
                            <span style={{ color: 'gray' }}>У вас еще нет аккаунта?</span>
                            <Button color="primary"><Link to="/auth/registr">Регистрация</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Authentication;