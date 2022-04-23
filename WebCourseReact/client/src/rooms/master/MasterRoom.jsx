import React, {useEffect, useState} from 'react'
import useHttp from "../../hooks/httpHook";
import Header from "../../compsPage/Header";
import EntranceInfo from "../../components/EntranceInfo";
import Paper from "@mui/material/Paper";
import OrderPanel from "../admin/OrderPanel";
import Footer from "../../compsPage/Footer";
import {useSelector} from "react-redux";

export default function MasterRoom(){
  const {request} = useHttp();

  let checkRegistr = useSelector(store => store.user.checkRegistr)

  const [orders, setOrders] = useState([])

  useEffect(async () => {
    const response = await request('order/get-orders-master-login', "POST", {login: checkRegistr});
    setOrders([...response.data])
  }, [])

  return (
    <div>
      <Header menu="admin"/>
      <div>
        <EntranceInfo/>

        <div className="admin-main">
          <Paper elevation={10}>
            {orders.map((ord, ind) => {
              return (
                <OrderPanel key={ind} order={ord}/>
              )})}
          </Paper>
        </div>
      </div>
      <Footer/>
    </div>
  );
}