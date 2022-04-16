import React from 'react'
import {useSelector} from "react-redux";
import './EntranceInfo.css'

export default function EntranceInfo() {

  let checkRegistr = useSelector(store => store.user.checkRegistr)

  function handleBtnYes() {
    document.location.href = "/";
  }

  function handleBtnNo(event) {
    event.target.hidden = true;
    event.target.previousElementSibling.hidden = true
    event.target.previousElementSibling.previousElementSibling.hidden = false
  }

  function handleExit(event) {
    event.target.hidden = true
    event.target.nextElementSibling.hidden = false;
    event.target.nextElementSibling.nextElementSibling.hidden = false;
  }

  return (
      <div className={'info-registr'}>
        &#9813;Вход выполнен успешно {checkRegistr}
        <button className={'client-bnt_exit'} onClick={(e) => handleExit(e)}>Выход</button>
        <button hidden className={'client-bnt_exit'} onClick={handleBtnYes}>Да</button>
        <button hidden className={'client-bnt_exit'} onClick={(e) => handleBtnNo(e)}>Нет</button>
      </div>
  )
}