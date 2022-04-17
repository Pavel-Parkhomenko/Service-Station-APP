import React, {useEffect, useState} from 'react'
import Paper from "@mui/material/Paper";
import useHttp from '../../hooks/httpHook'
import './ClientPriseTable.css'

export default function PriceTable({isAdmin}){

  const {request} = useHttp();

  const [works, setWorks] = useState([])

  useEffect(async () => {
    const resWorks = await request('work/get-works', 'GET');
    setWorks([...resWorks.works])

  }, [])

  return(
    <div>
      <Paper elevation={20} className='paper'>
        <h2> Прейскурант отпускных цен на услуги Service Station в г. Гомель</h2>
        <table className={"priceTable"}>
          <tbody>
          <tr>
            <th>Наименование</th>
            <th>Описание</th>
            <th>Стоимость</th>
          </tr>
          {works.map((x, ind) => <tr key={ind}>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td>{x.cost}</td>
          </tr>)}
          </tbody>
        </table>
        <h3>*Примечание: прейскурант ориентировочный, стоимость услуг уточняйте на СТО.</h3>
      </Paper>

    </div>
  )
}