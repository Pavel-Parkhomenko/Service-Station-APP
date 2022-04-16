import React, {useState, useEffect} from 'react'
import FormControl from "@mui/material/FormControl";
import {InputLabel, MenuItem, Select} from "@mui/material";
import useHttp from "../../hooks/httpHook";

export default function ChangeMaster(){

  const [masters, setMasters] = useState([]);

  const {request} = useHttp();

  useEffect(async () => {
    let response = await request('/employee/get-employee-master', 'GET');
    setMasters([...response.data])
  }, [])

  return(
    <>
      <FormControl fullWidth>
        <InputLabel>Мастер</InputLabel>
        <Select
          label="Master"
          defaultValue=""
        >
          {masters.map((m, ind) => {
            return(<MenuItem key={m.login} value={m.login}>{m.fio}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </>
  )
}