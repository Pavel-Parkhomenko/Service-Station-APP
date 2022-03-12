import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Menu.css';

export default function Menu(params) {

    // const [checkRegistr, setCheckRegistr] = useState(false)
    // const [disButtonOrder, setDisButtonOrder] = useState(false)

    let checkRegistr = useSelector(store => store.user.checkRegistr)

    return (
        <div className="content-menu">
            <div className='btn-order menu-butons'>
                <button disabled={!checkRegistr}>
                    {checkRegistr ? <Link to='/order'>Сделать заказ</Link> : <Link to='/auth/registr'>Сделать заказ</Link>}
                </button>
            </div>
            <div className="menu-butons">
                <a href='#main-servise_info' style={{ marginRight: 10 }}>Услуги</a>
                <a href='#' style={{ marginRight: 10 }}>Отзывы</a>
                <a href='#main-price_table' style={{ marginRight: 10 }}>Прейскурант</a>
                {checkRegistr ? <Link to='/client-room'>Личный кабинет</Link> : <Link to='/auth/registr'>Регистрация</Link>}
            </div>
        </div>
    )
};
