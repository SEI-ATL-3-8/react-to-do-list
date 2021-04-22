import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import FormPanel from './components/FormPanel'
import TaskList from './components/TaskList'



function App() {
  const [toDo, setToDo] = useState('')
  return (
    <div className="App">
     <Header />
     <div className="container">
       <div className="undoneTask">
      <FormPanel toDo={toDo} setToDo={setToDo} />
      
       </div>
       <div className="completeTask">
       <TaskList toDo={toDo} />
       </div>
     </div>
    </div>
  );
}

export default App;
