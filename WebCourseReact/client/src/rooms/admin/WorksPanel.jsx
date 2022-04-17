import React, {useState} from 'react'
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import AdminWorksTable from "./AdminWorksTable";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useHttp from '../../hooks/httpHook'

export default function WorksPanel() {

  let {request} = useHttp();
  const [form, setForm] = useState({
    name: '',
    description: '',
    cost: 0
  })

  async function addNewWorkHandle(event) {
    let response = await request("/work/add-work", "POST", {...form})
    console.log(response);
  }

  function textFieldHandle(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <Paper elevation={10} style={{border: '10px solid white'}}>
      <h2>Добавить новую услугу</h2>
      <form action="#" method="post">
        <Stack spacing={4} direction={"row"}>
          <TextField onChange={textFieldHandle} name={"cost"} label="Стоимость" variant="outlined"/>
          <TextField onChange={textFieldHandle} name={"name"} label="Название" variant="outlined"/>
          <TextField onChange={textFieldHandle} name={"description"} label="Описание" variant="outlined"/>
        </Stack>
      </form>
      <Button variant="outlined" style={{marginTop: "10px"}}
              onClick={event => addNewWorkHandle(event)}
      >
        Добавить новую услугу</Button>
      <AdminWorksTable/>
    </Paper>
  )
}