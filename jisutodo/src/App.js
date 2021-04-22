import './App.css';
import {useState} from 'react'
import Create from './components/Create'
import List from './components/List'

function App() {

const [contentList, setContentsList] =([{name:'ji'}])
const addNewlist = (list) => {
  const newList = [...contentList, list]
  setContentsList(newList)
}

  return (
    <div className="container">
      <h1>To Do List</h1>
      <Create />
      <List contentList ={contentList} setContentsList={setContentsList}/>
      
    </div>
  );
}

export default App;
