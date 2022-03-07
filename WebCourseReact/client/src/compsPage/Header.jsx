import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';
import { Link } from 'react-router-dom'
import ClientMenu from '../rooms/user/ClientMenu';

export default function Header({menu}) {

    return (
        <header className="header">
            <div className='logo'>
                <Link to='/'><img src={require("../img/logo-1.PNG")} /></Link>
            </div>
            <div className='phone'>
                <h2 className='phone'>+375 25 6768356</h2>
            </div>
            {menu == 'false' ? <ClientMenu/> : <Menu />}
        </header>
    )
};