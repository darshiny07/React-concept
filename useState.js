
import React, { useState } from 'react'


const Content = () => {
    const [number , setNumber] =useState("")

      const increment = () => 
      {
        setNumber(number+1)
      }   
    const  decrement =()=>{
      setNumber(number -1)
    }
    
  return (
    <div>
       <button onClick={increment}>  +</button>
      <button onClick={decrement}>  -</button>
       
        <p>{number} people like this post</p>
    </div>
  )
}



// useState object


export default Content