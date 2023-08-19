import React, { useState } from 'react'

const Parentusinglocalstate = () => {
    const [user,setUser]= useState("react")
  return (
    <div>
        <h1>Parentusinglocalstate</h1>
        <Component1 user={user}/>
    </div>

  )
}

function Component1({user}) {
    return(
        <>
        <h2>component1</h2>
        <Component2 user={user}/>
       </>
    )
}


function Component2 ({user}){
    return(
        <>
        <h2>component2</h2>
        <Component3 user={user}/>
        </>
    )
}


function Component3 ({user}) {
    return(
        <>
        <h2>component3</h2>
        <h1>{`user is ${user}`}</h1>
        </>
    )
}
export default Parentusinglocalstate