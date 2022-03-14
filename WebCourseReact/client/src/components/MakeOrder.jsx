import React, { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import './MakeOrder.css'
import Button from '@material-ui/core/Button';
import { Link, Navigate } from 'react-router-dom'
import useHttp from '../hooks/httpHook'
import { useDispatch, useSelector } from 'react-redux'
import { changeCheckRegistr } from '../store/userSlice'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function MakeOrder() {

    const { request } = useHttp()

    const [form, setForm] = useState({
        login: 'login1',
        mark: 'test',
        yearRelese: '',
        typeEngine: '',
        gosnumber: '',
        problemText: ''
    })

    const [marks, setMarks] = useState([])

    function handleInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function handelOrder() {
        const response = await request('/order/create', 'POST', { ...form })
    }

    useEffect(async () => {
        const response = await request('mark/get-marks', 'GET');
        setMarks([...response.data])
    }, [])

    console.log(marks)

    return (
        <div className='singUp-container'>
            <div className="up-container">
                <form action="#" method="post" id="form">
                    <h1 style={{ textAlign: 'center' }}>&bull; Оформление заявки &bull;</h1>
                    <div className="underline"></div>

                    <div className='row-container'>
                        <FormControl className='input_text'>
                            <InputLabel>Модель</InputLabel>
                            <Select defaultValue="" native>
                                <option unselectable='true' aria-label="None" value="" />
                                {marks.map((m, indMark) => (
                                    <optgroup key={indMark} label={m.name}>
                                        {m.models.map((x, ind) => <option key={ind} value={x}>{x}</option>)}
                                    </optgroup>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField className='input_text' name="yearRelese" onChange={handleInput} label="Год выпуска" required />
                    </div>

                    <div className='row-container'>
                        <TextField className='input_text' name="gosnumber" onChange={handleInput} label="Госномер" required />
                        <TextField className='input_text' name="typeEngine" onChange={handleInput} label="Тип двигателя" required />
                    </div>
                    <div>
                        <TextField className='full-width' name="problemText" onChange={handleInput} label="Опишите свою проблему" multiline
                            rows={2}
                        />
                    </div>

                    <div className='btns'>
                        <Button onClick={handelOrder} variant="contained" color="secondary">Оформить</Button>
                        <div>
                            <Button color="primary"><Link to="/client-room">Назад</Link></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MakeOrder;