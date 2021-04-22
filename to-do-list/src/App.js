
import './App.css';
import Note from './components/note'
import List from './components/list'
import {useState} from 'react'


function App() {
  const [newNote, setNewNote] = useState([])

  const showNotes = (note) => {
   const oneNote = [note, ...newNote]
   setNewNote(oneNote)
 }

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <div className="container">
          <Note showNotes={showNotes}/>
          <List newNote={newNote} setNewNote={setNewNote}/>
      </div>
    
    </div>
  );
}

export default App;
