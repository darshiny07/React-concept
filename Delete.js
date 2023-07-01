import React from 'react'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Delete = () => {
    const [item , setItem] = useState([
        {id: 1,
        checked: false,
      item: "practice code" },
      {id: 2,
        checked: false,
      item: "sleep" },
      {id: 3,
        checked: false,
      item: "Eat" },
      ])
      const handleCheck = (id)=>{
        // using spred operator to want display the item name also
       const listItems = item.map((item) => item.id===id ?{...item,checked:!item.checked}:item)
      setItem(listItems)}
      // delete Icon
      const handleDelete=(id)=>{
        // handle id compare item id if its match atha mattum delete 
        const deletebtn =item.filter((item)=>item.id!==id)
        setItem(deletebtn) }
  return (
    <div>
          <ul>
       
       {item.map((item)=>(
         <li key={item.id}>
           {/* Using onChange to change state tick items*/}
           <input type= "checkbox" onChange={()=>handleCheck(item.id)}checked ={item.checked}></input>
         <label>{item.item}</label>
         {/* gives item.id in handleDelete to known what item to delete */}
            <DeleteIcon  color='primary' role= "button" tabIndex="0" onClick={()=>handleDelete(item.id)} />
         </li>
       )
       )}
     
   </ul>
    </div>
  )
}

export default Delete