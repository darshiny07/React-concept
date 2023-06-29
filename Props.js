import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <div className="App">
<Welcome name = "darshiny"/>
<Welcome name = "tony"/>
    </div>
  );
}


function Welcome (props){
  return (
    <div> 
      <h1>hello{props.name}</h1>
    </div>
  )
}

export default App;
