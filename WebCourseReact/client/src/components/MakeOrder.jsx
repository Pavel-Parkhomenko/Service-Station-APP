import React, { useState, useEffect } from 'react';
import './MakeOrder.css'
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom'
import useHttp from '../hooks/httpHook'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    return (
        <div className='order-container-full'>
            <div className="order-container">
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
                        <TextField className='fullWidth' name="problemText" onChange={handleInput} label="Опишите свою проблему" multiline
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