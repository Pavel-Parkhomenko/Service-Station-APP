import React, { useCallback } from 'react'

function Message({message}) {
    return ( 
        <div style={{height:100, backgroundColor:'red',position:'relative', zIndex:10}}>
            {message}
        </div>
     );
}

export default Message;