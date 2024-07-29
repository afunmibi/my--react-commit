import React, { useState } from 'react';


function Comment() {
  const [name, setName] = useState('Good Morning');
  // console.log(agog);

  
  return (
    <div>
      <h1>React Usestate hook</h1>
<h3>{name}</h3>
<button onClick={()=>setName('Good Evening')}>Change Name</button>

    </div>
  )
}

export default Comment
