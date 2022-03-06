import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Menu.css';
import '../App.css';

export default function Menu(params) {

    // const [checkRegistr, setCheckRegistr] = useState(false)
    // const [disButtonOrder, setDisButtonOrder] = useState(false)

    let checkRegistr = useSelector(store => store.user.checkRegistr)

    return (
        <div className="content-menu">
            <div className='btn-order'>
                <button disabled={!checkRegistr}>
                    {checkRegistr ? <Link to='/order'>Сделать заказ</Link> : 'Сделать заказ'}
                </button>
            </div>
            <div className="menu-butons">
                <a href='/auth' style={{ marginRight: 10 }}>Услуги</a>
                {checkRegistr ? <Link to='/client-room'>Личный кабинет</Link> : <Link to='/auth'>Регистрация</Link>}
            </div>
        </div>
    )
};
