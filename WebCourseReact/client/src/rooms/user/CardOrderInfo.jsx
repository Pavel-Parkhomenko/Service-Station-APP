import React from 'react';
import './CardOrderInfo.css'

function CardOrderInfo({ order }) {

  let { auto, client, dateRegistr, master, payment, status, problemText, cost } = { ...order }

  return (
    <div>
      <table className={"client-cardOrderInfo"}>
        <tbody>
          <tr>
            <td colSpan="4" style={{backgroundColor:"gray"}}>Заказ от {dateRegistr}</td>
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
            <td>{
              <ul>
                <li>{client.fio}</li>
                <li>{client.phone}</li>
              </ul>
            }</td>
            {status.toLowerCase() === "ожидание" ? <td>Не назначен</td> : <td>{
              <ul>
                <li>{master.fio}</li>
                <li>{master.email}</li>
              </ul>
            }</td>}
          </tr>
          <tr>
            <td colSpan="4">
              {problemText}
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              {payment !== "0" ? <span>Заказ оплачен</span> :
                <div><span>Заказ не оплачен (к оплате ){cost} руб.</span><button>Оплатить</button></div>
              }
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default CardOrderInfo;