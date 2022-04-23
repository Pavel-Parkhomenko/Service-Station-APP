import React, {useState} from 'react';
import './OrderPanel.css'
import Button from '@mui/material/Button'
import ChangeMaster from "./ChangeMaster";
import {TextField} from "@mui/material";
import useHttp from '../../hooks/httpHook'

function OrderPanel({order}) {

  let {_id, auto, client, dateRegistr, master, payment, status, problemText, cost} = {...order}
  const {request} = useHttp();

  const [newCost, setNewCost] = useState('');
  const [newMaster, setNewMaster] = useState({});

  async function refuseHandle() {
    const response = request('order/update-master-cost', 'POST', {status: 'Отказано', id: _id})
  }

  async function acceptHandle() {
    const response = request('order/update-master-cost', 'PUT',
      {status: 'Принято', cost: newCost, id: _id, master: newMaster})

  }

  return (
    <div>
      <table className={"admin-orderPanel"} style={{marginBottom: 20}}>
        <tbody>
        <tr>
          <td colSpan="4">Заказ от {dateRegistr} №{_id}</td>
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
          {status === "Ожидание"
            ?
            <td>
              <ChangeMaster setNewMaster={setNewMaster}/>
            </td>
            :
            <td>
              <ul>
                <li>{master.fio}</li>
                <li>{master.email}</li>
              </ul>
            </td>
          }
        </tr>
        <tr>
          <td colSpan="4">
            Описание проблемы: {problemText}
          </td>
        </tr>
        <tr>
          <td colSpan="4">
            {cost ? <span>Стоимость заказа: {cost}</span> : <div>
              <TextField
                label='Укажите стоимость заказа'
                size="small"
                value={newCost}
                onChange={(event) =>
                  setNewCost(event.target.value)}
              />
            </div>}
          </td>
        </tr>
        </tbody>
      </table>
      {status.toLowerCase() === "ожидание"
        ?
        <div className={'action-order-panel'}>
          <Button variant="outlined" onClick={acceptHandle}>Принять</Button>
          <Button variant="text" onClick={refuseHandle}>Отказать</Button>
        </div>
        :
        <div className={'action-order-panel'}>
          <span>Заказ уже принят </span>
        </div>}
      <hr/>
    </div>
  );
}

export default OrderPanel;