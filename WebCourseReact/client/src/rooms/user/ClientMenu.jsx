import React from 'react';
import { Link } from 'react-router-dom'
import './ClientMenu.css';

function ClientMenu() {
    return (
        <div className='clientMenu-container'>
            <div>
                <button>
                    <Link to='/order'>Сделать заказ</Link>
                </button>
            </div>
            <div>
                <Link to='/'>Назад&#8614;</Link>
            </div>
        </div>
    );
}

export default ClientMenu;