import React from 'react'
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './ClientPanelMenu.css';

export default function ClientPanelMenu(){
  return(
    <div className={"client-ClientPanelMenu"}>
      <Paper className='paper' elevation={20}>
        <Stack className="stack" direction="row" spacing={3}>
          <Button color="secondary">Главная</Button>
          <Button color="secondary">Ваши заказы</Button>
          <Button color="secondary">Отзывы</Button>
          <Button color="secondary">Услуги</Button>
          <Button color="secondary">Новый заказ</Button>
        </Stack>
      </Paper>
    </div>
  )
}