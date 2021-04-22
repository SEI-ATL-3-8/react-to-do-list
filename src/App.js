import './App.css';
import React, {useState} from 'react'
import FormPanel from './components/FormPanel'
import TodoListPanel from './components/TodoListPanel'

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState()


  return (
    <div className="App">
      <div className="container">
      <FormPanel/>

      <TodoListPanel/>
      </div>
    </div>
  );
}

export default App;
