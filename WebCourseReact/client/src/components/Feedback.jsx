import React, { useCallback } from 'react'
import './Feedback.css'

function Feedback({ displayStyle }) {
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
                        Пархоменко Павел
                    </div>
                    <div className='feedback-text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sequi iusto deleniti ipsam voluptatibus autem, voluptate rerum aperiam? Amet, explicabo.
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Feedback;