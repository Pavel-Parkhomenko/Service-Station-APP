import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';
import { Link } from 'react-router-dom'

export default function Header(params) {

    const [disButtonOrder, setDisButtonOrder] = useState(false)

    return (
        <header className="header">
            <div className='logo'>
                <Link to='/'><img src={require("../img/logo-1.PNG")} /></Link>
            </div>
            <div className='phone'>
                <h2 className='phone'>+375 25 6768356</h2>
            </div>
            <div className='btn-order'>
                <button disabled={disButtonOrder}>
                    {disButtonOrder ? 'Сделать заказ' : <Link to='/order'>Сделать заказ</Link>}
                </button>
            </div>
            <Menu />
        </header>
    )
};