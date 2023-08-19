import React from 'react'
import statueList from './Data.js'
import { useState } from 'react'


const App = () => {
   const [index,setIndex] = useState(0)
    const [showmore, setShowMore] = useState()
    const [previous,setPrevious] = useState()

    function handleClick() {
        setIndex(index + 1)
    }

    function handlePrevious(){
        setPrevious(previous - 1)
    }


    function handleShowMore() {
        setShowMore(!showmore)
    }
    let statue =  statueList[index]
  return (
    <div>

      <h2>
        {statue.name}
        by {statue.artist}
      </h2>
      <button onClick={handleClick}>Next</button> &nbsp;

      <button onClick={handlePrevious}>Previous</button>

      <button onClick={handleShowMore}>{showmore? "hide" : "show"} details</button>
      {showmore && <p>{statue.description}</p> }

      <h5> ({index +1} of {statueList.length})</h5>
      
      <img src={statue.url} alt={statue.alt} />
            
    </div>
  )
}

export default App








