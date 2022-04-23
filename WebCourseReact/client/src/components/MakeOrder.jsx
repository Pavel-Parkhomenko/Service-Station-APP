import React, {useState, useEffect} from 'react';
import './MakeOrder.css'
import Button from '@mui/material/Button';
import {Link, Navigate} from 'react-router-dom'
import useHttp from '../hooks/httpHook'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {MenuItem} from "@mui/material";
import {useSelector} from "react-redux";

function MakeOrder() {

  const {request} = useHttp()
  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const [form, setForm] = useState({
    login: checkRegistr,
    mark: '',
    yearRelese: '',
    typeEngine: '',
    gosnumber: '',
    problemText: ''
  })

  const [marks, setMarks] = useState([])

  function handleInput(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  async function handelOrder() {
    const response = await request('/order/create', 'POST', {...form})
  }

  useEffect(async () => {
    const response = await request('mark/get-marks', 'GET');
    setMarks([...response.data])
  }, [])

  return (
    <div className='order-container-full'>
      <div className="order-container">
        <form action="#" method="post" id="form">
          <h1 style={{textAlign: 'center'}}>&bull; Оформление заявки &bull;</h1>
          <div className="underline"/>

          <div className='row-container'>

            <FormControl className='input_text'>
              <InputLabel>Модель</InputLabel>
              <Select defaultValue="" native name="mark" onChange={handleInput}>
                <option unselectable='true' aria-label="None" value=""/>
                {marks.map((m, indMark) => (
                  <optgroup key={indMark} label={m.name}>
                    {m.models.map((x, ind) => <option key={ind} value={x}>{x}</option>)}
                  </optgroup>
                ))}
              </Select>
            </FormControl>

            <TextField type='number'
                       className='input_text'
                       name="yearRelese"
                       onChange={handleInput}
                       label="Год выпуска"
                       required
                       defaultValue='2000'
            />
          </div>

          <div className='row-container'>
            <TextField
              className='input_text'
              name="gosnumber"
              onChange={handleInput}
              label="Госномер"
              required
            />

            <FormControl className='input_text'>
              <InputLabel>Тип двигателя</InputLabel>
              <Select native
                      label="Тип двигателя"
                      onChange={handleInput}
                      name='typeEngine'
              >
                <option value='Бензин'>Бензин</option>
                <option value='Дизель'>Дизель</option>
                <option value='Гибрид'>Гибрид</option>
                <option value='Электро'>Электро</option>
              </Select>
            </FormControl>

          </div>
          <div>
            <TextField className='fullWidth'
                       name="problemText"
                       onChange={handleInput}
                       label="Опишите свою проблему"
                       multiline
                       rows={2}
            />
          </div>

          <div className='btns'>
            <Button
              onClick={handelOrder}
              variant="contained"
              color="secondary"
            >
              Оформить
            </Button>
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