import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './SingUp.css'
import { Link, Navigate } from 'react-router-dom'
import useHttp from '../hooks/httpHook'
import { useDispatch, useSelector } from 'react-redux'
import { changeCheckRegistr } from '../store/userSlice'
import TextField from '@mui/material/TextField';


function SingUp() {

	let checkRegistr = useSelector(store => store.user.checkRegistr)

	const [form, setForm] = useState({
		fio: '',
		login: '',
		phone: '',
		password: '',
		email: '',
	})

	const { request } = useHttp();
	const dispatch = useDispatch();

	async function handelSingUp() {
		const response = await request('/auth/registr', 'POST', { ...form })
		if (!response.hasOwnProperty('err'))
			dispatch(changeCheckRegistr({login: form.login}))
	}

	function handleInput(event) {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	return (
		checkRegistr ? (
			<Navigate to='/client-room' />
		) :
			(<div className='singUp-container'>
				<div className="up-container">
					<form action="#" method="post" id="form">
						<h1 style={{ textAlign: 'center' }}>&bull; РЕГИСТРАЦИЯ &bull;</h1>
						<div className="underline"/>

						<div className='input-container'>
							<div className='row-container'>
								<TextField name="fio" onChange={handleInput} label="ФИО" required />
								<TextField name="phone" onChange={handleInput} label="Телефон" required />
							</div>
							<div>
								<TextField name='email' onChange={handleInput} className='fullWidth' label="Email" />
							</div>
							<div>
								<TextField name="login" className='fullWidth' onChange={handleInput} label="Логин" />
							</div>
							<div>
								<TextField name="password" type="password" onChange={handleInput} className='fullWidth' label="Пароль" />
							</div>
						</div>


						<div className='btns'>
							<Button onClick={handelSingUp} variant="contained" color="secondary">Регистрация</Button>
							<div>
								<span style={{ color: 'gray' }}>У вас уже есть аккаунт?</span>
								<Button color="primary"><Link to="/auth/login">Вход</Link></Button>
							</div>
						</div>
					</form>
				</div>
			</div>)
	);
}

export default SingUp;