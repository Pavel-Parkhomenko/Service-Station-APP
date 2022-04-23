import React, {useState, useEffect} from 'react'
import FormControl from "@mui/material/FormControl";
import {InputLabel, MenuItem, Select} from "@mui/material";
import useHttp from "../../hooks/httpHook";

export default function ChangeMaster({setNewMaster}){

  const [masters, setMasters] = useState([]);

  const {request} = useHttp();

  useEffect(async () => {
    let response = await request('/employee/get-employee-master', 'GET');
    setMasters([...response.data])
  }, [])

  function selectMasterHandle(event){
    let master = masters.find(x => x.login === event.target.value)
    let {fio, login, email} = {...master}
    setNewMaster({fio, login, email})
  }

  return(
    <>
      <FormControl  sx={{ minWidth: 200, maxWidth: 200 }}>
        <InputLabel>Мастер</InputLabel>
        <Select
          label="Master"
          onChange={selectMasterHandle}
        >
          {masters.map((m, ind) => {
            return(<MenuItem key={m.login} value={m.login}>{m.fio}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </>
  )
}