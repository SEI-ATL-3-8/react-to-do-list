import './App.css';
import {useState} from 'react'
import Form from "./components/form"
import Todo from './components/todo'

function App() {
const[allTodo, setAllTodo] = useState('')
  
return (
    <div>
     <Form allTodo={allTodo} setAllTodo={setAllTodo}/>   
     <Todo />
    </div>



  )

}
  
  
  
 


export default App;
