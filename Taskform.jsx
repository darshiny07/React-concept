import React from 'react'
import './TaskForm.css'


const Taskform = () => {
  return (
   
       <header className='appHeader'>
        <form>
            <input type="text" className='taskInput' placeholder='enterTask' />

            <div className='taskFromButton'>
                
                <button className='tag'>HTML</button>
                <button className='tag'>CSS</button>
                <button className='tag'>JavaScript</button>
                <button className='tag'>React js</button>
              
              
                <select className='taskSelect'>
                  <option value="Todo">To Do</option>
                  <option value="Doing">On Going</option>
                  <option value="Done"> Complete</option>
                </select>
                
                <button className='Addtask'>Add Task</button>
              
           
        </div>
        </form>
          
        </header>
  
  )
}

export default Taskform
