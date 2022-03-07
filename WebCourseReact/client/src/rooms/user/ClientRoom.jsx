import React from 'react';
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import CardOrderInfo from './CardOrderInfo';
import './ClientRoom.css'

function ClientRoom() {

    return (
        <div>
            <Header menu='false' />
            <div className='client-info_registr'>
                &#9813;Вход выполнен успешно
                <button>Выход</button>
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

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ClientRoom;