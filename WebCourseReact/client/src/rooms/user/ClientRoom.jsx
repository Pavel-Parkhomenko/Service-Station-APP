import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/httpHook'
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import CardOrderInfo from './CardOrderInfo';
import './ClientRoom.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'
import FeedbackPanel from './FeedbackPanel'

function ClientRoom() {

    const { request } = useHttp();
    const [orders, setOrders] = useState([]);

    let checkRegistr = useSelector(store => store.user.checkRegistr)

    function handleBtnYes() {
        document.location.href = "/";
    }

    function handleBtnNo(event) {
        event.target.hidden = true;
        event.target.previousElementSibling.hidden = true
        event.target.previousElementSibling.previousElementSibling.hidden = false
    }

    function handleExit(event) {
        event.target.hidden = true
        event.target.nextElementSibling.hidden = false;
        event.target.nextElementSibling.nextElementSibling.hidden = false;
    }

    const [works, setWorks] = useState([])


    useEffect(async () => {
        const response = await request('order/get-orders-login', "POST", { login: checkRegistr });
        setOrders([...response.data])

        const resWorks = await request('work/get-works', 'GET');
		setWorks([...resWorks.works])

    }, [])

    return (
        <div className='client-room-container'>
            <Header menu='client' />
            <div className='client-menu_main'>
                <Paper className='client-menu' elevation={20}>
                    <Stack className="stack" direction="row" spacing={3}>
                        <Button color="secondary">Главная</Button>
                        <Button color="secondary">Ваши заказы</Button>
                        <Button color="secondary">Отзывы</Button>
                        <Button color="secondary">Услуги</Button>
                        <Button color="secondary">Новый заказ</Button>
                    </Stack>
                </Paper>
                <div className='client-info_registr'>
                    &#9813;Вход выполнен успешно {checkRegistr}
                    <button className='client-bnt_exit' onClick={(e) => handleExit(e)}>Выход</button>
                    <button hidden className='client-bnt_exit' onClick={handleBtnYes}>Да</button>
                    <button hidden className='client-bnt_exit' onClick={(e) => handleBtnNo(e)}>Нет</button>
                </div>
                <div className='client-main'>
                    <Paper elevation={20} className="paper">
                        {orders.map((ord, ind) => {
                            return (
                                <CardOrderInfo order={ord} />
                            )
                        })}
                    </Paper>

                   <FeedbackPanel/>

                    <Paper elevation={20} className='paper'>

                        <h2>
                            Прейскурант отпускных цен на услуги Service Station в г. Гомель
                        </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Описание</th>
                                    <th>Стоимость</th>
                                </tr>
                                {works.map((x, ind) => <tr key={ind}>
                                    <td>{x.name}</td>
                                    <td>{x.description}</td>
                                    <td>{x.cost}</td>
                                </tr>)}
                            </tbody>
                        </table>
                        <h3>*Примечание: прейскурант ориентировочный, стоимость услуг уточняйте на СТО.</h3>

                    </Paper>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ClientRoom;