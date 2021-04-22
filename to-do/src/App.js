import './App.css';

import{ useState } from 'react'

import FormPanel from './components/FormPanel'
import TodoPanel from './components/TodoListPanel';

function App() {
const [notes, setNotes] = useState([])

const addToNotes = (note) => {
  const newNote = [note, ...notes]
  setNotes(newNote)
}

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="component-container">
        <FormPanel 
        addToNotes={addToNotes}/>
        <TodoPanel 
        notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
