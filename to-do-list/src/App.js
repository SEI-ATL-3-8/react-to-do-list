import './App.css';
import {useState} from 'react'

import TodoList from './Components/TodoList'
import NewToDoForm from './Components/NewToDoForm';

function App() {
  const [toDos, setToDos] = useState([])
  const [done, setDone] = useState(false)
  const [toDo, setToDo] = useState('')

  const addToToDos = (item) => {
    const newStack = [...toDos, item]
    setToDos(newStack)
  }

  return (
    <div className="full-app">
      <h1>My To Do List</h1>
      <div className="container">
        <NewToDoForm addToToDos={addToToDos} toDo={toDo} setToDo={setToDo}/>
        <TodoList toDos={toDos} setToDos={setToDos} />
      </div>
    </div>
  );
}

export default App;
