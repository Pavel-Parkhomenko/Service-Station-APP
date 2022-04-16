import React from 'react'
import Paper from "@mui/material/Paper";
import PriceTable from "../../components/PriseTable";
import {TextField} from "@mui/material";

export default function WorksPanel() {
  return (
    <>
      <Paper>
        <div>
          <h2>Добавить новую услугу</h2>
          <TextField id="outlined-basic" label="Стоимость" variant="outlined"/>
          <TextField id="outlined-basic" label="Название" variant="outlined"/>
          <TextField id="outlined-basic" label="Описание" variant="outlined"/>
        </div>
      </Paper>
      <PriceTable isAdmin={true}/>

    </>
  )
}