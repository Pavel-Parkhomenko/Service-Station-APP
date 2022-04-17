import React, {useEffect, useRef, useState} from 'react'
import useHttp from "../../hooks/httpHook";
import './AdminWorksTable.css'
import {TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AdminWorksTable() {

  const {request} = useHttp();

  const [works, setWorks] = useState([])
  const [colSpanFirstTh, setColSpanFirstTh] = useState(3)
  const editPanel = useRef(null);
  const deletePanel = useRef(null);
  const idWorkFromBd = useRef('');

  const [form, setForm] = useState({
    name: '',
    description: '',
    cost: 0,
    _id: "",
  })

  useEffect(async () => {
    const resWorks = await request('work/get-works', 'GET');
    setWorks([...resWorks.works])

  }, [])

  function editHandle(event) {
    let parent = event.target.parentElement;
    let obj = {};
    obj.name = parent.children[2].textContent;
    obj.description = parent.children[3].textContent;
    obj.cost = parent.children[4].textContent;
    obj._id = parent.id;
    setForm({...obj})
    editPanel.current.style.display = "block";
  }

  function deleteWorkHandle(event) {
    let parent = event.target.parentElement;
    idWorkFromBd.current = parent.id;
    deletePanel.current.style.display = "block";
  }

  async function updateWorkHandle(event) {
    console.log(form);
    let response = await request('/work/update-work', "PUT", {...form})
    console.log(response);
  }

  function textFieldHandle(event) {
    setForm({...form, [event.target.name]: event.target.value})
  }

  function yesDelete(){
    let response = request("/work/delete-work", "DELETE", {id: idWorkFromBd.current})
    console.log(response);
  }

  function noDelete(){
    deletePanel.current.style.display = "none";
  }

  return (
    <div>
      <h2> Прейскурант отпускных цен на услуги Service Station в г. Гомель</h2>
      <table className={"admin-workTable"}>
        <tbody>
        <tr>
          <th colSpan={colSpanFirstTh}>Наименование</th>
          <th>Описание</th>
          <th>Стоимость</th>
        </tr>
        {works.map((x, ind) => <tr key={x._id} id={x._id}>
          <td onClick={event => editHandle(event)}>&#9998;</td>
          <td onClick={deleteWorkHandle}>&#10006;</td>
          <td>{x.name}</td>
          <td>{x.description}</td>
          <td>{x.cost}</td>
        </tr>)}
        </tbody>
      </table>

      <div ref={deletePanel} className={"admin-deletePanel"}>
        <span>Вы действительно хотите удалить?</span>
        <Button color="success" onClick={noDelete}>
          Нет
        </Button>
        <Button color="error" onClick={yesDelete}>
          Удалить
        </Button>
      </div>

      <div ref={editPanel} className={"admin-editPanel"}>
        <h2>Изменить данные</h2>
        <form action="#" method="post">
          <Stack spacing={4} direction={"row"}>
            <TextField required onChange={textFieldHandle} name={"name"} label="Стоимость" value={form.name}/>
            <TextField required onChange={textFieldHandle} name={"description"} label="Название" value={form.description}/>
            <TextField required onChange={textFieldHandle} name={"cost"} label="Описание" value={form.cost}/>
          </Stack>
        </form>
        <Stack spacing={2} direction="row" style={{marginTop: "10px"}}>
          <Button onClick={updateWorkHandle} variant="outlined">Сохранить изменения</Button>
        </Stack>
      </div>

    </div>
  )
}