import React from 'react'

function Counter(proprs) {
    console.log(proprs);
  return (
    <>
        <div>Counter</div>
        <div className=''>
            <button type='button'>-</button>
            <input type='number'/>
            <button type='button'>+</button>
            
        </div>
    </>
   
  )
}

export default Counter