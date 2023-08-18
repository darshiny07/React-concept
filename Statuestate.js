import React from 'react'
import statueList from './Data.js'


const App = () => {
    let index = 0 

    function handleClick() {
        index = index + 1 ;
    }
    let statue =  statueList[index]
  return (
    <div>
      <button onClick={handleClick}>Next</button>

      <h2>
        {statue.name}
        by {statue.artist}
      </h2>

      <h5> ({index +1} of {statueList.length})</h5>

      <img src={statue.url} alt={statue.alt} />

      <p>{statue.description}</p>
    </div>
  )
}

export default App








