import React , {useState} from 'react'
import  './Style.css';
function Counter() {
    const[count,setCount]= useState(0);

  return (
    <div className="Count">
      <h1 className={count > 0 ? 'positive' : count < 0  ?'negative' : null}>{count}</h1>
      <div className='button'>
      <button className='b1' onClick={()=>setCount(count-1)}>-</button>
      <button className='b1' onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;