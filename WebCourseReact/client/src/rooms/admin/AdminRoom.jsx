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

function AdminRoom() {

  const {request} = useHttp();

  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState('');
  const [cost, setCost] = useState('');
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
    console.log(id + " deleted")
    const response = await request('client/delete-feedback', 'PUT', {id: id})
    console.log(response);
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
                    <OrderPanel key={ind} order={ord}/>
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
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default AdminRoom;