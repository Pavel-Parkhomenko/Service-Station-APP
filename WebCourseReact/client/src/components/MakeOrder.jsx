import React from 'react';
import './MakeOrder.css'

function MakeOrder() {
    return (
        <div>
            <div>
                <span>ФИО</span>
                <input type='text'></input>
            </div>
            <div>
                <span>Номер телефона</span>
                <input type='text'></input>
            </div>
            <div>
                <span>Возможная проблема</span>
                <select name="" id="">

                </select>
            </div>
            <div>
                <span>Марка</span>
                <input type='text'></input>
            </div>
            <div>
                <span>Госномер</span>
                <input type='text'></input>
            </div>
            <div>
                <span>Тип двитателя</span>
                <input type='text'></input>
            </div>
        </div>
    );
}

export default MakeOrder;