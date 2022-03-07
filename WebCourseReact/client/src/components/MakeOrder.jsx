import React, { useState } from 'react';
import { useStore } from 'react-redux';
import './MakeOrder.css'

function MakeOrder() {

    const [form, setForm] = useState({
        fio: '',
        phone: '',
        mark: '',
        yearRelese: '',
        typeEngine: '',
        gosnumber: '',
        problemText: ''
    })

    function handleInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="order-container">
            <form action="#" method="post" id="order_form">
                <h1 style={{ textAlign: 'center' }}>&bull; Оформление заявки &bull;</h1>
                <div className="order-underline"></div>
                <div className='row-container'>
                    <input name='fio' onChange={handleInput} className='order-input_text' type="text" placeholder='ФИО' required />
                    <input name='phone' onChange={handleInput} className='order-input_text' type="text" placeholder='Телефон' required />
                </div>
                <div className='row-container'>
                    <input name='mark' onChange={handleInput} className='order-input_text' type="text" placeholder='Марка автомобиля' required />
                    <input name='yearRelese' onChange={handleInput} className='order-input_text' type="text" placeholder='Год выпуска' required />
                </div>
                <div className='row-container'>
                    <input name='typeEngine' onChange={handleInput} className='order-input_text' type="text" placeholder='Тип двигателя' required />
                    <input name='gosnumber' onChange={handleInput} className='order-input_text' type="text" placeholder='Госномер' required />
                </div>
                <div>
                    <textarea name='problemText' onChange={handleInput} className='order-textarea' placeholder='Опишите вашу проблему' cols="30" rows="5"></textarea>
                </div>
                <button className="order-form_button">Оформить заявку</button>
            </form>
        </div>
    );
}

export default MakeOrder;