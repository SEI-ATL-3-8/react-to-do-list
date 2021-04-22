import './App.css';
import { useState } from 'react';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import Categories from './components/Categories';

function App() {
  const [notes, setNotes] = useState([]);
  const [view, setView] = useState('all');

  console.log(notes);
  
  return (
    <div className="container">
      <Categories setView={setView}/>
      <div className="row">
        <div className="col">
          <CreateNote setNotes={setNotes} notes={notes} />
        </div>
        <Notes setNotes={setNotes} notes={notes} view={view}/>
      </div>

    </div>
  );
}

export default App;
