import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import FormPanel from './components/FormPanel';
import ToDoList from './components/ToDoList';

function App() {
  const [toDo, setToDo] = useState('');

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <div className="container">
        <FormPanel toDo={toDo} setToDo={setToDo}/>
        <ToDoList toDo={toDo}/>
      </div>
    </div>
  );
}

export default App;
