import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './SingUp.css'
import { Link, Navigate } from 'react-router-dom'
import useHttp from '../hooks/httpHook'
import { useDispatch, useSelector } from 'react-redux'
import { changeCheckRegistr } from '../store/userSlice'
import TextField from '@material-ui/core/TextField';


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
			dispatch(changeCheckRegistr())
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
						<div className="underline"></div>

						<div className='row-container'>
							<TextField name="fio" onChange={handleInput} className='input_text' label="ФИО" required />
							<TextField name="phone" onChange={handleInput} className='input_text' label="Телефон" required />
						</div>

						<div>
							<TextField name="email" onChange={handleInput} className='full-width input_text' label="Email" />
						</div>
						<div>
							<TextField name="login" className='full-width input_text' onChange={handleInput} label="Логин" required />
						</div>
						<div>
							<TextField name="password" onChange={handleInput} className='full-width input_text' label="Пароль" required />
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