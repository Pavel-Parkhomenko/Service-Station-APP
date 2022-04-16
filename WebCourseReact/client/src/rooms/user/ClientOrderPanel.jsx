import React, {useEffect, useState} from 'react'
import Paper from "@mui/material/Paper";
import CardOrderInfo from "./CardOrderInfo";
import useHttp from "../../hooks/httpHook";
import {useSelector} from "react-redux";

export default function ClientOrderPanel(){
  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const { request } = useHttp();
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const response = await request('order/get-orders-login', "POST", { login: checkRegistr });
    setOrders([...response.data])
  }, [])

  return(
    <>
      <Paper elevation={20} className="paper">
        {orders.map((ord, ind) => {
          return (
            <CardOrderInfo key={ind} order={ord} />
          )
        })}
      </Paper>

    </>
  )
}