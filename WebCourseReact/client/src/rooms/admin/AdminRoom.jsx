import React, {useEffect, useRef, useState} from 'react';
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useHttp from '../../hooks/httpHook'
// import OrderPanel from './OrderPanel'
import './AdminRoom.css';

function AdminRoom() {

  const {request} = useHttp();

  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState('');
  const [cost, setCost] = useState('');

  useEffect(async () => {
    const response = await request('order/get-orders', "GET");
    setOrders([...response.data])
  }, [])

  return (
      <div>
        <Header menu="admin"/>
        <div className='admin-menu_main'>
          <Paper className='admin-menu' elevation={20}>
            <Stack className="stack" direction="row" spacing={3}>
              <Button color="secondary">Главная</Button>
              <Button color="secondary">Заказы</Button>
              <Button color="secondary">Отзывы</Button>
              <Button color="secondary">Услуги</Button>
              <Button color="secondary">Пользователи</Button>
            </Stack>
          </Paper>
          <div className='admin-info_registr'>
            &#9813;Вход выполнен успешно
          </div>

          {/*<div className="admin-main">*/}
          {/*  <Paper elevation={20} className="paper">*/}
          {/*    {orders.map((ord, ind) => {*/}
          {/*      return (*/}
          {/*          <OrderPanel key={ind} order={ord}/>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </Paper>*/}
          {/*</div>*/}


        </div>
        <Footer/>
      </div>
  );
}

export default AdminRoom;