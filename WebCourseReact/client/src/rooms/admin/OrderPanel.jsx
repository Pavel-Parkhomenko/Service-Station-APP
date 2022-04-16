import React from 'react';
import './OrderPanel.css'
import Button from '@mui/material/Button'
import ChangeMaster from "./ChangeMaster";

function OrderPanel({ order }) {

  let { auto, client, dateRegistr, master, payment, status, problemText, cost } = { ...order }

  return (
    <div>
      <table className={"admin-orderPanel"} style={{ marginBottom: 20 }}>
        <tbody>
          <tr>
            <td colSpan="4">Заказ от {dateRegistr}</td>
          </tr>
          <tr>
            <td colSpan="4">Статус заказа: {status}</td>
          </tr>
          <tr>
            <th>Автомобиль</th>
            <th>Клиент</th>
            <th>Мастер</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Выпуск: {auto.yearRelese}</li>
                <li>Марка: {auto.mark}</li>
                <li>Двигатель: {auto.typeEngine}</li>
                <li>Номер: {auto.gosnumber}</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>{client.fio}</li>
                <li>{client.phone}</li>
              </ul>
            </td>
            {status === "Ожидание" ? <td><ChangeMaster/></td> : <td>
              <ul>
                <li>{master.fio}</li>
                <li>{master.email}</li>
              </ul>
            </td> 
            }
          </tr>
          <tr>
            <td colSpan="4">
              {problemText}
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              {cost ? <span>Стоимость заказа: {cost}</span> : <div>
                <span>Укажите стоимость заказа: </span>
                <input type="text"/>
              </div>}
            </td>
          </tr>
          {status.toLowerCase() === "ожидание" ? <div ><Button variant="outlined">Принять</Button>
            <Button variant="text">Отказать</Button></div> : <div>
            <span>Заказ уже принят </span>
          </div>}
        </tbody>
      </table>
      <hr/>
    </div>
  );
}

export default OrderPanel;