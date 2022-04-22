import React, {useState} from 'react';
import './CardOrderInfo.css'
import Button from "@mui/material/Button";
import Pay from "./Pay";

function CardOrderInfo({ order }) {

  let { _id, auto, client, dateRegistr, master, payment, status, problemText, cost } = { ...order }


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <table className={"client-cardOrderInfo"}>
        <tbody>
          <tr>
            <td colSpan="4" style={{backgroundColor:"gray"}}>Заказ от {dateRegistr} №{_id}</td>
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
                <div>
                  <span>Заказ не оплачен (к оплате ){cost} руб.</span>
                  <Button variant={'outlined'} onClick={handleClickOpen}>Оплатить</Button>
                </div>
              }
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Pay isOpen={open} setOpen={setOpen} id={_id}/>
    </div>
  );
}

export default CardOrderInfo;