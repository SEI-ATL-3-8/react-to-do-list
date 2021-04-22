import {useState} from 'react';
import FormPanel from './componets/formpanel'
import TodoList from './componets/todolistPanel'
import './App.css';



function App() {
  const [form, setform ] = useState("")
  const [items, setItems ] = useState([])
  const [text, setText] = useState("Done")  

  return (
    <div className="App">

      <h1>My To Do List</h1>

      <div className = "content">
          <FormPanel form = {form} setform= {setform} items= {items} setItems = {setItems} setText = {setText}/>
          <TodoList items= {items} setItems = {setItems} text = {text} setText = {setText}/>

      </div>
   
    </div>
  );
}

export default App;
