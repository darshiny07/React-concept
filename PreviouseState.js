import React, { useEffect, useState , useRef} from 'react'

function PreviousState() {
    const [inputvalue , setInputValue] = useState()
    const preRef = useRef('')

    useEffect (()=> {
            preRef.current = inputvalue
    },[inputvalue])
    return(
        <div>
            <input type="text"
             value={inputvalue} 
             onChange={(e) => setInputValue(e.target.value)}/>
            <h3>current value : {inputvalue}</h3>
            <h3>Ref value : {preRef.current}</h3>
        </div>
    )
}

export default PreviousState