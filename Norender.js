import React, { useState,useRef } from 'react'

function Norender() {

    const [counter,setCounter] = useState(0)
    const countRef = useRef(0)

    const handleclick = () =>{
        setCounter(counter +1)
    }
    const handleRef = () =>{
        countRef.current++
    }
    console.log("im rendering");
    // Save the data without Rerender
    return (
        <div>
            <h1>{`Counter is ${counter}`}</h1>
            <h1>{ `Ref is ${countRef.current}`}</h1>



            <button onClick={handleclick}>Increment count</button>
            <button onClick={handleRef}>UseRef count</button>
        </div>
    )
}

export default Norender