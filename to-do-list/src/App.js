import './App.css';
import { useState } from 'react'

import FormSection from './components/FormSection'
import ListSection from './components/ListSection'


function App() {
  const [toDo, setToDo] = useState('')
  const [list, setList] = useState([])
  const [done, setDone] = useState('')

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className = 'container' >
      <FormSection toDo = {toDo} setToDo = {setToDo} setList = {setList} list = {list} />
      <ListSection list = {list} setList = {setList} />
      </div>
    </div>
  );
}

export default App;
