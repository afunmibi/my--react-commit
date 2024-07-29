import React, {useState} from 'react';

function Button() {
    const isActive = false;
  return (
    <div>
      <h2>Still on useState Hook</h2>
      {isActive ? <button>Click Me</button> : 'Welcome to my page'}
      {isActive ? <p className='good'>You are good to go</p> : <p className='poor'>and Pack out of my house</p>}
    </div>
  );
}

export default Button;
