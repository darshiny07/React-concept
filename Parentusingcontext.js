import React , { createContext, useContext, useState } from 'react'

// const value = useContext(SomeContext)
// Passing data deeply into the tree
// Updating data passed via context
// Specifying a fallback default value
// Overriding context for a part of the tree
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone
const UserContext = createContext()
const Parentusingcontext = () => {
    const [user]= useState("priyadarshiny")
  return (
        <UserContext.Provider value={user}>
            <h1>Parent using context</h1>
            <Component1 user={user}/>
        </UserContext.Provider>

  )
}
function Component1() {
    return(
        <>
        <h2>component1</h2>
        <Component2 />
       </>
    )
}


function Component2 (){
    return(
        <>
        <h2>component2</h2>
        <Component3 />
        </>
    )
}


function Component3 () {
         const user = useContext(UserContext)
    return(
        <>
        <h2>component3</h2>
        <h1>{`user name is ${user} in component three`}</h1>
        </>
    )
}
export default Parentusingcontext