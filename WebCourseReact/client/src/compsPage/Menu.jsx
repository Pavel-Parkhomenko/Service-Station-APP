import { Link } from 'react-router-dom';

import React from 'react';

import './Menu.css';
import '../App.css';

export default function Menu(params) {
    return (
        // <div className="content-menu">
        //     <Link to='/'>Главная</Link>
        //     <Link to='/auth'>Регистрация</Link>
        //     <Link to='/order'>Сделать заказ</Link>
        // </div>
        <div className="content-menu">
            <div className="menu-butons">
                <a href='/auth' style={{ marginRight: 10 }}>Услуги</a>
                <Link to='/auth'>Регистрация</Link>
            </div>
        </div>
    )
};
