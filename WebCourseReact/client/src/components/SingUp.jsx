import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SingUp.css'
import useHttp from '../hooks/httpHook'

function Authentication() {

    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    async function call(event) {
        const responsose = await request('/auth/registr', 'POST', { ...form })
        console.log(responsose);
    }

    function handleInput(event){
        setForm({...form, [event.target.name]: event.target.value})  
    }

    return (
        <div className='singUp'>
            <div className='form'>
                <form action="#" method="post">
                    <h2>Регистрация</h2>
                    <p>
                        <label class="floatLabel">Login</label>
                        <input name="login" type="text" onChange={handleInput}/>
                    </p>
                    <p>
                        <label class="floatLabel">Password</label>
                        <input name="password" type="password" onChange={handleInput}/>
                        {/* <span>Пароль должен содержать</span> */}
                    </p>
                    {/* <p>
                    <label for="confirm_password" class="floatLabel">Confirm Password</label>
                    <input id="confirm_password" name="confirm_password" type="password" />
                    <span>Пароли не совпадают</span>
                </p> */}

                </form>
                <div className='btns-container'>
                    <button onClick={call} className="btn registr">Регистрация</button>
                    <button className="btn singIn">Вход</button>
                    <Link style={{ fontSize: 14 }} to="/">Назад</Link>
                </div>
            </div>
        </div>
    );
}

export default Authentication;