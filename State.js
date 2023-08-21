import React from 'react'
import statueList from './Data.js'
import { useState } from 'react'


const State = () => {
   const [index,setIndex] = useState(0)
    const [showmore, setShowMore] = useState()
 

    let preState = index > 0
    let hasNext = index < statueList.length - 1

    function handleNext() {
        if(hasNext)
        setIndex(index + 1)
    }

    function handlePrevious(){
            if(preState)
        setIndex(index - 1)
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
      <button onClick={handleNext} disabled={!hasNext}>Next</button> &nbsp;

      <button onClick={handlePrevious} disabled={!preState}>Previous</button>

      <button onClick={handleShowMore}>{showmore? "hide" : "show"} details</button>
      {showmore && <p>{statue.description}</p> }

      <h5> ({index +1} of {statueList.length})</h5>
      
      <img src={statue.url} alt={statue.alt} />
            
    </div>
  )
}

export default State








