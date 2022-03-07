import React from 'react';
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import CardOrderInfo from './CardOrderInfo';
import './ClientRoom.css'

function ClientRoom() {

    function handleBtnYes() {
        document.location.href = "/";
    }
    function handleBtnNo(event){
        event.target.hidden = true;
        event.target.previousElementSibling.hidden = true
        event.target.previousElementSibling.previousElementSibling.hidden = false
    }

    function handleExit(event) {
        event.target.hidden = true
        event.target.nextElementSibling.hidden = false;
        event.target.nextElementSibling.nextElementSibling.hidden = false;
    }

    return (
        <div>
            <Header menu='false' />
            <div className='client-info_registr'>
                &#9813;Вход выполнен успешно
                <button className='client-bnt_exit' onClick={(e) => handleExit(e)}>Выход</button>
                <button hidden className='client-bnt_exit' onClick={handleBtnYes}>Да</button>
                <button hidden className='client-bnt_exit' onClick={(e) => handleBtnNo(e)}>Нет</button>
            </div>
            <div className='client-menu_main'>
                <div className='client-menu'>
                    <ul className='client-menu'>
                        <li><a href="#">Ваши заказы</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Услуги</a></li>
                    </ul>
                </div>
                <div className='client-main'>
                <CardOrderInfo/>
                <CardOrderInfo/>
                <CardOrderInfo/>
                <CardOrderInfo/>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ClientRoom;