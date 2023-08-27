import React from 'react'
import './index.css'
import './App.css'
import Taskform from './Taskform'
 
const App = () => {
  return (
    <div>
          <Taskform/>
      <main className='appMain'>
        <section className='taskColumn'>Section 1</section>
        <section className='taskColumn'>Section 1</section>
        <section className='taskColumn'>Section 1</section>
      </main>
    </div>
  )
}

export default App
