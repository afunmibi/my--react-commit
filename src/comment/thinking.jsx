import React, { useState } from 'react'

function Comment2() {
  const [handle, SetHandlechange] = useState('Felix');
 
  return (
    <div>
      <h4>I am comment 2</h4>
         <h6>{handle}</h6> 
         <button onClick={()=>SetHandlechange('Wumi')}>Change Name</button> 
    </div>
  )
}

export default Comment2
