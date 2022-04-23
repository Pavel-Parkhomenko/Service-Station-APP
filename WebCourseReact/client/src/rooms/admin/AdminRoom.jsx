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
import Feedback from "../../components/Feedback";
import Statistics from "./statistics/Statistics";
import Example from "./statistics/Example";

function AdminRoom() {

  const {request} = useHttp();

  const [orders, setOrders] = useState([])
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(async () => {
    const resFeedback = await request('client/get-feedbacks', "GET");
    setFeedbacks([...resFeedback.data])
  }, [])

  useEffect(async () => {
    const response = await request('order/get-orders', "GET");
    setOrders([...response.data])
  }, [])

  async function deleteFeedbackHandle(event, id) {
    const response = await request('client/delete-feedback', 'PUT', {id: id})
  }

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
                    <OrderPanel key={ord._id} order={ord}/>
                )})}
            </Paper>
            <WorksPanel/>
            <Paper elevation={10}>
              <div>
                <h2>Отзывы наших клиентов</h2>
                {feedbacks.map((x, ind) => <Feedback
                  key={x._id}
                  id={x._id}
                  deleteFeedbackHandle={deleteFeedbackHandle}
                  fio={x.fio}
                  feedback={x.feedback}
                  isAdmin={true}
                  />
                )}
              </div>
            </Paper>

            <Paper elevation={20}>
              <h2>Статистика</h2>
              <h3>Диаграмма марок автомобилей на 100% заказов</h3>
              <Statistics/>
              <h3>Диаграмма ожидаемых заказов и реальных</h3>
              <div>
                <Example/>
              </div>
            </Paper>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default AdminRoom;