import {useState} from 'react'
import './App.css';
import Form from './components/form'
import List from './components/to-do-list'
import CrushedIt from './components/crushedIt'


function App() {



  const[toDoList, setToDoList] = useState([])
  const[doneItems, setDoneItems] = useState([])

  const addToList = (item) => {
    let arr = []
    arr.push(...toDoList, item)
    setToDoList([...arr])
  }

  const addToDone = (item) => {
      let arr = []
      arr.push(...doneItems, item)
      setDoneItems([...arr])
      deleteFromList(item)

    }

  const deleteFromList = (item) => {
    let arr = [...toDoList]
    let index = toDoList.indexOf(item)
    arr.splice(index,1)
    setToDoList([...arr])

  }

  return (
    <div className="App">
      <h1>Bris Get Your Ish Together List</h1>

      <div className = 'create'>
        <div className = 'create-header'>Create New Note</div>
        <Form 
          addToList = {addToList}
        />
      </div>

      <div className = 'lists'>

        <div className = 'to-do'>
          <h2>To Do's</h2>
          <List 
           toDoList = {toDoList}
           addToDone = {addToDone}
          />
        </div>

        <div className = 'crushed-it'>
          <h2>Crushed It</h2>
          <CrushedIt
           doneItems = {doneItems}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
