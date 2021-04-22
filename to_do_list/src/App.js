
import './App.css';
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import CreateNote from './components/CreateNote'





function App() {

  const [ToDos, setToDos] = useState([
    {name: "Buy Groceries", completed: false},
    {name: "Do Homework", completed: false}
  ])
  
  return (
    <div className="container">
      <CreateNote ToDos={ToDos} setToDos={setToDos}/>
      <ToDoList ToDos={ToDos} setToDos={setToDos}/>
     
     
    </div>
  );
}

export default App;
