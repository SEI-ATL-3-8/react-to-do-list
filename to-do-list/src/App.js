import './App.css';
import {useState} from 'react'

import Todos from './Components/Todos'

function App() {
  const {toDos, setToDos} = useState('')

  const addToToDos = (item) => {
    const newStack = [...toDos, item]
    setToDos(newStack)
  }

  return (
    <div className="full-app">
      <h1>My To Do List</h1>
      <div className="container">

      </div>
    </div>
  );
}

export default App;
