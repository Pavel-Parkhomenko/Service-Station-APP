import React from 'react'
import './Feedback.css'
import Button from "@mui/material/Button";

function Feedback({displayStyle, fio, id, feedback, isAdmin, deleteFeedbackHandle}) {
  if (displayStyle === undefined)
    displayStyle = 'inline';

  return (
    <div style={{display: displayStyle}}>
      <div className='feedback-container'>
        <div className='feedback-photo'>
          <img src={require("../img/avatar-1.png")} alt={'profile'}/>
        </div>
        <div className='feedback-text_container'>
          <div className='feedback-name'>
            {fio}
          </div>
          <div className='feedback-text'>
            {feedback}
          </div>
        </div>
        {isAdmin ? <Button onClick={(e) => deleteFeedbackHandle(e, id)} size="small" color='error'>Удалить</Button> : null}
      </div>
    </div>
  );
}

export default Feedback;