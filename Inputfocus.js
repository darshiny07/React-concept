import React from 'react'
import { useRef  , useEffect } from 'react'


function Inputfocus () {
    const textRef = useRef()

    useEffect(() => {
        textRef.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={textRef}/>
        </div>
    )

    
}

export default Inputfocus



