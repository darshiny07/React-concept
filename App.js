import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
 
function App( ) {
  const [item , setItem] = useState([
    {id: 1,
    checked: true,
  item: "practice code" },
  {id: 2,
    checked: false,
  item: "sleep" },
  {id: 3,
    checked: true,
  item: "Eat" },
  ])
    return (
    <div className="justify">
      <ul>
       
          {item.map((item)=>(
            <li><input type= "checkbox" checked ={item.checked}></input>
            <label>{item.item}</label>
            <button>   <DeleteIcon  color='primary'/></button>
            </li>
          )
          )}
        
      </ul>
    </div>
  );
}

export default App;
