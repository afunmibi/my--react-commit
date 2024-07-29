import React, {useState} from 'react'

function Loading() {
  const [isLoading, setLoading] = useState(false);
  return (
    <div>
      <h1>UseState Hook with Boolean Type</h1>
      <button onClick={()=>setLoading(!isLoading)}>Set Loading</button>

      {isLoading ? <p>Loading.........</p>: <h3>Data will display here</h3>}
    </div>
  )
}

export default Loading;
