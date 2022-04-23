import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';
import { Link } from 'react-router-dom'
import ClientMenu from '../rooms/user/ClientMenu';
import AdminMenu from '../rooms/admin/AdminMenu';


export default function Header({ menu }) {

  if (menu === 'admin') {
    return (
      <header>
        <div className='header-container'>
          <div className='logo'>
            <Link to='/'><img alt={'logo'} src={require("../img/logo-1.PNG")} /></Link>
          </div>
          <h2>Кабинет администратора</h2>
          <AdminMenu/>
        </div>
      </header>
    )
  }
  else if (menu === 'client') {
    return (
      <header>
        <div className='header-container'>
          <div className='logo'>
            <Link to='/'><img src={require("../img/logo-1.PNG")} /></Link>
          </div>

          <h2>Личный кабинет</h2>
          <h2 style={{ fontWeight: 'normal' }} className='phone'>&#9743;<b>+375 (25)</b> 6768356</h2>
          <ClientMenu />
        </div>
      </header>
    )
  }
  else {
    return (
      <header>
        <div className='header-container'>
          <div className='logo'>
            <Link to='/'><img src={require("../img/logo-1.PNG")}  alt={'logo'}/></Link>
          </div>

          <h2 style={{ fontWeight: 'normal' }} className='phone'>&#9743;<b>+375 (25)</b> 6768356</h2>
          <Menu />
        </div>
      </header>
    )
  }
};