import React from 'react'
import './Feedback.css'

function Feedback({ displayStyle, fio, feedback }) {
    if(displayStyle == undefined)
        displayStyle = 'inline';

    return (
        <div style={{display: displayStyle}}>
            <div className='feedback-container'>
                <div className='feedback-photo'>
                    <img src={require("../img/avatar-1.png")} />
                </div>
                <div className='feedback-text_container'>
                    <div className='feedback-name'>
                        {fio}
                    </div>
                    <div className='feedback-text'>
                       {feedback}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Feedback;