import React, {useEffect, useState} from 'react'
import Paper from "@mui/material/Paper";
import CardOrderInfo from "./CardOrderInfo";
import useHttp from "../../hooks/httpHook";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

export default function ClientOrderPanel() {
  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const {request} = useHttp();
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const response = await request('order/get-orders-login', "POST", {login: checkRegistr});
    if(response.ok) setOrders([...response.data])
  }, [])

  if (orders.length !== 0) {
    return (
      <>
        <Paper elevation={20} className="paper">
          {orders.map((ord, ind) => {
            return (
              <CardOrderInfo key={ind} order={ord}/>
            )
          })}
        </Paper>

      </>
    )
  }
  else return(
    <Paper elevation={20} className="paper">
      <span>Вы не сделали еще ни одного заказа </span>
      <Button><Link to='/order'>Сделать заказ</Link></Button>
    </Paper>
  )
}