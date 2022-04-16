import React, {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import './SingIn.css'
import useHttp from '../hooks/httpHook'
import {useDispatch} from 'react-redux'
import {changeCheckRegistr} from '../store/userSlice'
import {useSelector} from 'react-redux'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {Checkbox} from "@mui/material";

function Authentication() {

  const {loading, request} = useHttp();
  const [errMessage, setErrMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  async function handelSingIn() {
    let response;
    if (!isAdmin)
      response = await request('/auth/login', 'POST', {...form})
    else
      response = await request('/employee/login-empl', 'POST', {...form})

    if (!response.hasOwnProperty('err')) {
      dispatch(changeCheckRegistr({login: form.login}))
    }

    setErrMessage(response.message)
  }

  function handleInput(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  function isAdminHandle(event) {
    setIsAdmin(!isAdmin);
  }

  if (!checkRegistr) {
    return (<div className='singIn-container'>
      <div className='in-container'>
        <h1 style={{textAlign: 'center'}}>&bull; Вход &bull;</h1>
        <div className="underline"/>
        <form action="#" method="post" id="registr-form">
          <div>
            <TextField onChange={handleInput} name='login' className='fullWidth' label="Логин"/>
          </div>
          <div>
            <TextField onChange={handleInput} name='password' style={{marginTop: 30}} className='fullWidth'
                       label="Пароль"/>
          </div>

        </form>
        <div className='btns'>
          <Button onClick={handelSingIn} variant="contained" color="secondary">Вход</Button>
          <div>
            <span style={{color: 'gray'}}>У вас еще нет аккаунта?</span>
            <Button color="primary"><Link to="/auth/registr">Регистрация</Link></Button>
            <div>
              <span style={{color: 'gray'}}>Я являюсь сотрутдником</span>
              <Checkbox checked={isAdmin} onChange={isAdminHandle} label="Start" labelPlacement="start"/>
            </div>
          </div>

        </div>
      </div>
    </div>)
  } else if (!isAdmin)
    return <Navigate to='/client-room'/>
  else return <Navigate to='/admin-room'/>
}

export default Authentication;