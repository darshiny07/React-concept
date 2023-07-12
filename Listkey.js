import React from 'react'

const App = () => {
  const Details = [
    {id: 1, name: 'Darshiny'},
    {id: 2, name: 'Rajesh'},
    {id: 3, name: 'Vishal'},
    {id: 4, name: 'Jaya bharathi'},
  ];


  const developer = [
    {name:"darshiny",
  skills:[
    {name:"react js" , type:"frontend"},
           {name:" js" , type:"frontend"}]},

           {name:"Rjesh",
           skills:[
            {name:"python" , type:"backendend"},
                    {name:"SQL" , type:"backendend"}]},      
  ];

  const person ={
    name:"darhiny",
    email:"darshey714@gmail.com",
    age:22
  }
  return (
    <div className='App'>
      <header>
      <h1>React list and keys</h1>
      </header>
   {/* <ul>
    {Details.map(data=>(
      <li>{data.name}</li>
    ))}
   </ul>
      */}
      {/* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: */}
   {/* <ul>
    {Details.map(data=>(
      <li key={data.id}>{data.name}</li>
    ))}
   </ul> */}
     

     {/* When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort: */}
   {/* <ul>
    {Details.map((data,index)=>(
      <li key={index}>{data.name}</li>
    ))}
   </ul> */}



{/* Array of local variable ex:skills [{}] */}

{/* {developer.map((data,index)=>(
<div key={index}>
  <h1>{data.name}skills</h1>
  <div>
    {data.skills.map((skill,index)=>
    <p key={index}>
      {skill.type} - {skill.name}
      </p>
  )}</div>
</div>
))} */}

{/* only object {} */}
  <div>
    {Object.keys(person).map(key=>(
      <p>{person[key]}</p>
    ))}
</div>


    </div>
  )
}


export default Listkey