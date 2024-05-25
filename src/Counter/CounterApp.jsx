import { useState } from 'react'
import './counter.css'
function CounterApp() {
    const [count, setCount] = useState(0)
    function random(){
      setCount(Math.floor(Math.random()*10))
    }
    return (
      <div className='wrapper'>
        <h1 className='display'>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)} className='btn'>Increment</button>
        <button onClick={()=>setCount(count-1)} className='btn'>Decrment</button>
        <button onClick={random} className='btn'>Random</button>
      </div>
    )
}

export default CounterApp
