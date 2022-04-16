import React, {useEffect, useRef, useState} from 'react'
import Paper from "@mui/material/Paper";
import useHttp from '../hooks/httpHook'
import './PriseTable.css'
import {TextField} from "@mui/material";

export default function PriceTable({isAdmin}){

  const {request} = useHttp();

  const [works, setWorks] = useState([])
  const [colSpanFirstTh, setColSpanFirstTh] = useState(3)
  const editPanel = useRef(null);
  const [editData, setEditData] = useState({name: "nama", description: "desc", cost: "cost"});

  useEffect(async () => {
    const resWorks = await request('work/get-works', 'GET');
    setWorks([...resWorks.works])

  }, [])

  function editHandle(event){
    let parent = event.target.parentElement;
    let obj = {};
    obj.name = parent.children[2].textContent;
    obj.description = parent.children[3].textContent;
    obj.cost = parent.children[4].textContent;
    setEditData({...obj})
    editPanel.current.style.display = "block";
  }

  return(
    <div>
      <Paper elevation={20} className='paper'>
        <h2> Прейскурант отпускных цен на услуги Service Station в г. Гомель</h2>
        <table className={"priceTable"}>
          <tbody>
          <tr>
            <th colSpan={colSpanFirstTh}>Наименование</th>
            <th>Описание</th>
            <th>Стоимость</th>
          </tr>
          {works.map((x, ind) => <tr key={ind}>
            <td onClick={event => editHandle(event)}>&#9998;</td>
            <td>&#10006;</td>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td>{x.cost}</td>
          </tr>)}
          </tbody>
        </table>
        <h3>*Примечание: прейскурант ориентировочный, стоимость услуг уточняйте на СТО.</h3>

        <div ref={editPanel} className={"editPanel"}>
          <h2>Изменить данные</h2>
          <TextField required id="outlined-required" label="Название" value={editData.name}/>
          <TextField required id="outlined-required" label="Описание" value={editData.description}/>
          <TextField required id="outlined-required" label="Стоимость" value={editData.cost}/>
        </div>

      </Paper>

    </div>
  )
}