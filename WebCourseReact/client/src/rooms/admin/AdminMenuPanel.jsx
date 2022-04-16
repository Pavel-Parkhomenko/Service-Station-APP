import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import './AdminMenuPanel.css'

export default function AdminMenuPanel(){
  return (
    <div className={"admin-AdminMenuPanel"}>
      <Paper className='admin-menu' elevation={20}>
        <Stack className="stack" direction="row" spacing={3}>
          <Button color="secondary">Главная</Button>
          <Button color="secondary">Заказы</Button>
          <Button color="secondary">Отзывы</Button>
          <Button color="secondary">Услуги</Button>
          <Button color="secondary">Пользователи</Button>
        </Stack>
      </Paper>
    </div>
  )
}