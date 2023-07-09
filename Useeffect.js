import React, { useState , useEffect} from 'react'

const App = () => {
    const [counter1, setCounter1]=useState(0)
    const [counter2, setCounter2]= useState(0)
    //  type 1 :every time state change react is re-render
// useEffect(()=>{
//     console.log('use effect execute')
// })

// type 2: if give in dependicies array [] only that particular will be change
// useEffect(()=>{
//     console.log('use effect execute')
// },[counter2])

//   type 3: its call only once while refreshing the page
useEffect(()=>{
    console.log('use effect execute')
},[])


  return (
    <div>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>
        <button onClick={()=>setCounter1(counter1 + 1)}>increment</button>
        <button onClick={()=>setCounter2(counter2 + 1)}>increment</button>
    </div>
  )
}

export default App