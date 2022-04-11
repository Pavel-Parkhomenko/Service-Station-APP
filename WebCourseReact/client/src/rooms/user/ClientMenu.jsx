import React from 'react';
import { Link } from 'react-router-dom'
import './ClientMenu.css';
import Button from '@mui/material/Button';

function ClientMenu() {
    return (
        <div className='clientMenu-container'>
            <div>
                <Button variant="outlined"><Link to='/order'>Сделать заказ</Link></Button>
            </div>
            <div>
                <Button variant="text"><Link to='/'>Назад👉</Link></Button>
            </div>
        </div>
    );
}

export default ClientMenu;