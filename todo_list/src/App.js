import './App.css';
import {useState} from 'react'
import ToDoListSection from './components/ToDoListSection'
import FormSection from './components/FormSection'
import Completed from './components/Completed'


function App() {
  const [allTodos, setAllTodos] = useState([])

  const itemIsDone = (item, i) => {
    let newArr = [...allTodos]
    newArr[i] = {
      text: item.text,
      done: true
    }
    setAllTodos(newArr)
  }

  return (
    <div className="App">
      <h1>
        Hi
      </h1>
      <div className="content">
        <FormSection 
          allTodos = {allTodos}
          setAllTodos = {setAllTodos}
        />

        <ToDoListSection 
        allTodos = {allTodos}
        itemIsDone ={itemIsDone}
        />
        <Completed 
          allTodos = {allTodos}
        />
      </div>
      
    </div>
  );
}

export default App;
