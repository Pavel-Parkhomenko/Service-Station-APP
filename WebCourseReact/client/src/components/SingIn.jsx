import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './SingIn.css'
import useHttp from '../hooks/httpHook'
import { useDispatch } from 'react-redux'
import { changeCheckRegistr } from '../store/userSlice'
import {useSelector} from 'react-redux'

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
            <div className='singUp'>
                <div className='registr-form_container'>
                    <form action="#" method="post" id="registr-form">
                        <h2>Регистрация</h2>
                        <div>
                            <label className="floatLabel">Login</label>
                            <input name="login" type="text" onChange={handleInput} />
                        </div>
                        <div>
                            <label className="floatLabel">Password</label>
                            <input name="password" type="password" onChange={handleInput} />
                            {errMessage ? <span className='errMess-span'>{errMessage}</span> : <span></span>}
                        </div>
                    </form>
                    <div className='btns-container'>
                        <button onClick={handelSingUp} disabled={loading} className="btn registr">Регистрация</button>
                        <button onClick={handelSingIn} disabled={loading} className="btn singIn">Вход</button>
                        <Link style={{ fontSize: 14 }} to="/">Назад</Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default Authentication;