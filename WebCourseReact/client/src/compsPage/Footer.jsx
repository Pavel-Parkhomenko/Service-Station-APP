import React from 'react';
import '../App.css';
import './Footer.css';

export default function Footer(params) {
    return (
        <footer className="footer">
            <div className='footer-1'>
                <img className='img-left' src={require("../img/img-footer-1.PNG")}  alt='logo'/>
                <h2>Подпишитесь на нас в соцсетях и мессенджерах</h2>
                <h3>И получайте информацию о наших новостях, скидках и предложениях</h3>
                <div className='messengeres'>
                    <a href="#">VK</a>
                    <a href="#">Instagram</a>
                    <a href="#">Telegram</a>
                </div>
            </div>
            <div className='footer-2'>
                <h3>Лучшая СТО 2022</h3>
                <h3>Наш адрес:<br/>Проспект Речицкий 135</h3>
                <h3>Время работы:<br/> Ежедневно c 8.00 до 22.00<br/> Без обеда</h3>
                <button className='btn-request'>Оставить заявку</button>
            </div>
        </footer>
    )
};
