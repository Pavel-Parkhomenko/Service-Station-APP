import React, { useState, useEffect } from 'react';
import Feedback from '../../components/Feedback';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import useHttp from '../../hooks/httpHook'
import { useSelector } from 'react-redux'

function Feddback() {

  const { request } = useHttp();
  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [resMessage, setResMessage] = useState('');

  async function feedbackHandle() {
    let response = await request('client/update-feedback', "PUT", { newFeedback, login: checkRegistr });
    setResMessage(response.message);
  }

  useEffect(async () => {
    const resFeedback = await request('client/get-feedbacks', "GET");
    setFeedbacks([...resFeedback.data])
  }, [])

  return (
    <Paper elevation={20} className='paper'>
      <h2>Отзывы наших клиентов</h2>
      <TextField onChange={(event) => setNewFeedback(event.target.value)} value={newFeedback} margin="normal" fullWidth label="Сдесь вы можете оставить или изменить отзыв" multiline rows={2}
      />
      <div>
        <Button onClick={feedbackHandle} color='secondary' variant="outlined">Отправить</Button>
        <span style={{ color: "green", marginLeft: '10px' }}>{resMessage}</span>
      </div>

      <div style={{ height: '20px' }}></div>
      {feedbacks.map((x, ind) => <Feedback key={ind} fio={x.fio} feedback={x.feedback} />)}
    </Paper>
  );
}

export default Feddback;