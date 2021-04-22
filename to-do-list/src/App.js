
import './App.css';
import Note from './components/note'
import List from './components/list'
import {useState} from 'react'


function App() {
  // const [showList, setShowList]

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <div className="container">
          <Note />
          <List />
      </div>
    
    </div>
  );
}

export default App;
