import React, {useEffect, useRef, useState} from 'react';
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import Paper from '@mui/material/Paper';
import useHttp from '../../hooks/httpHook'
import OrderPanel from './OrderPanel'
import './AdminRoom.css';
import AdminMenuPanel from "./AdminMenuPanel";
import EntranceInfo from "../../components/EntranceInfo";
import WorksPanel from "./WorksPanel";

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
        <div>
          <AdminMenuPanel/>
          <EntranceInfo/>

          <div className="admin-main">
            <Paper elevation={10}>
              {orders.map((ord, ind) => {
                return (
                    <OrderPanel key={ind} order={ord}/>
                )})}
            </Paper>
            <WorksPanel/>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default AdminRoom;