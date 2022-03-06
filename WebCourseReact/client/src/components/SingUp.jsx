import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SingUp.css'
import useHttp from '../hooks/httpHook'
import Message from './Message';

function Authentication() {

    const { loading, request, error, clearError } = useHttp();

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    async function handelSingUp() {
        const response = await request('/auth/registr', 'POST', { ...form })
        console.log(response);
    }

    async function handelSingIn() {
        const response = await request('/auth/login', 'POST', { ...form })
    }

    function handleInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        clearError()
        console.log(error);
    }, [error, clearError])

    const flag = false;

    return (
        <div className='singUp'>
            <div hidden={flag}><Message message={error}/></div>
            <div className='form'>
                <form action="#" method="post">
                    <h2>Регистрация</h2>
                    <p>
                        <label className="floatLabel">Login</label>
                        <input name="login" type="text" onChange={handleInput} />
                    </p>
                    <p>
                        <label className="floatLabel">Password</label>
                        <input name="password" type="password" onChange={handleInput} />
                        {/* <span>Пароль должен содержать</span> */}
                    </p>
                    {/* <p>
                    <label for="confirm_password" class="floatLabel">Confirm Password</label>
                    <input id="confirm_password" name="confirm_password" type="password" />
                    <span>Пароли не совпадают</span>
                </p> */}

                </form>
                <div className='btns-container'>
                    <button onClick={handelSingUp} disabled={loading} className="btn registr">Регистрация</button>
                    <button onClick={handelSingIn} disabled={loading} className="btn singIn">Вход</button>
                    <Link style={{ fontSize: 14 }} to="/">Назад</Link>
                </div>
            </div>
        </div>
    );
}

export default Authentication;