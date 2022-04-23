import React, {useEffect, useRef, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import './SingIn.css'
import useHttp from '../hooks/httpHook'
import {useDispatch} from 'react-redux'
import {changeCheckRegistr} from '../store/userSlice'
import {useSelector} from 'react-redux'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {Checkbox} from "@mui/material";
import ErrorMessage from "./ErrorMessage";

function Authentication() {

  const {loading, request} = useHttp();
  const [errMessage, setErrMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMaster, setIsMaster] = useState(false)
  const [isEmployee, setIsEmployee] = useState(false)

  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const [isError, setIsError] = useState({
    err: false,
    message: 'default err for test'
  })

  async function handelSingIn() {
    let response;
    if (isEmployee) {
      response = await request('/employee/login-empl', 'POST', {...form})
      if (response.position === 'master') setIsMaster(true);
      else setIsAdmin(true)
    } else {
      response = await request('/auth/login', 'POST', {...form})
    }

    if (!response.hasOwnProperty('err')) {
      dispatch(changeCheckRegistr({login: form.login}))
    }
    else{
      setIsError({
        err: true,
        message: response.message
      })
    }
    setErrMessage(response.message)
  }

  function handleInput(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  function isEmployeeHandle(event) {
    setIsEmployee(!isEmployee);
  }

  if (!checkRegistr) {
    return (
      <>
        {isError.err ? <ErrorMessage setIsError={setIsError} message={isError.message} isOpen={isError.err}/> : null}
        <div className='singIn-container'>
          <div className='in-container'>
            <h1 style={{textAlign: 'center'}}>&bull; Вход &bull;</h1>
            <div className="underline"/>
            <form action="#" method="post" id="registr-form">
              <div>
                <TextField onChange={handleInput} name='login' className='fullWidth' label="Логин"/>
              </div>
              <div>
                <TextField onChange={handleInput} type="password" name='password' style={{marginTop: 30}}
                           className='fullWidth'
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
                  <Checkbox checked={isEmployee} onChange={isEmployeeHandle} label="Start" labelPlacement="start"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  } else if (isAdmin) return <Navigate to='/admin-room'/>
  else if (isMaster) return <Navigate to='/master-room'/>
  else return <Navigate to='/client-room'/>
}

export default Authentication;