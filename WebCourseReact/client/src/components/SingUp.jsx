import React, { useState } from 'react';
import './SingUp.css'

function SingUp() {

	const [form, setForm] = useState({
		fio: '',
		login: '',
		phone: '',
		password: '',
		email: '',
	})

	function handleInput(event) {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	return (
		<div className='singUp-container'>
			<div className="up-container">
				<form action="#" method="post" id="form">
					<h1 style={{ textAlign: 'center' }}>&bull; РЕГИСТРАЦИЯ &bull;</h1>
					<div className="underline"></div>

					<div className='row-container'>
						<input name='fio' onChange={handleInput} className='input_text' type="text" placeholder='ФИО' required />
						<input name='phone' onChange={handleInput} className='input_text' type="text" placeholder='Телефон' required />
					</div>

					<div>
						<input name='email' onChange={handleInput} className='full-width input_text' type="text" placeholder='Email' required />
					</div>
					<div>
						<input name='login' onChange={handleInput} className='full-width input_text' type="text" placeholder='Логин' required />
					</div>
					<div>
						<input name='password' onChange={handleInput} className='full-width input_text' type="text" placeholder='Пароль' required />
					</div>

					<button className="btn registr">Регистрация</button>
				</form>
			</div>
		</div>
	);
}

export default SingUp;