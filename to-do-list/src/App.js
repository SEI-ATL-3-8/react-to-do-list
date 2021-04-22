import './App.css';
import {useState} from 'react'

import Form from './components/Form'
import ToDo from './components/ToDo'
import ToDoList from './components/ToDoList'


function App() {

  const [toDoItems, setToDoItems] = useState([])

  const addItemToList = (item) => {
    const newItem = [...toDoItems, item]
    setToDoItems(newItem)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className= 'container'>
        <Form toDoItems={toDoItems} setToDoItems={setToDoItems} />
        <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />

      </div>

    </div>
  );
}

export default App;
