import { useState } from 'react'

import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([])

  const handleComplete = (e, noteIndex) => {
    console.log('made it', e.target, noteIndex)

    e.target.classList.toggle('complete')

    if (e.target.classList.contains('complete')) {
      let tempArr = [...notes]
      tempArr[noteIndex].complete = true
      setNotes(tempArr)
    } else {
      let tempArr = [...notes]
      tempArr[noteIndex].complete = false
      setNotes(tempArr)
    }
  }

  const handleRemoveNote = (noteIndex) => {
    let tempArr = [...notes]
    tempArr.splice(noteIndex, 1)
    setNotes(tempArr)
  }

  return (
    <div className="App">
      <h1>Keep Track of Your ToDo's</h1>
      <main>
        <NoteForm 
          notes = {notes}
          setNotes = {setNotes}
        />
        <NoteList 
          notes = {notes}
          setNotes = {setNotes}
          handleComplete = {handleComplete}
          handleRemoveNote = {handleRemoveNote}
        />
      </main>
    </div>
  );
}

export default App;
