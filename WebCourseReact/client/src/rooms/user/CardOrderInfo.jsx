import React from 'react';
import './ClientRoom.css'

function CardOrderInfo() {
    return (
        <div>
            <table className='client-table'>
                <tr>
                    <td colspan="4">Заказ №1 от 10.10.2010</td>
                </tr>
                <tr>
                    <td colspan="4">Статус заказа: готов</td>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td colspan="4">
                        Заказ не оплачен
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default CardOrderInfo;