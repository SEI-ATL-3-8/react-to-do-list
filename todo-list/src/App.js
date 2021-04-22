import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import FormPanel from './components/FormPanel'
import TaskList from './components/TaskList'
import SingleTask from './components/SingleTask';



function App() {
  const [toDo, setToDo] = useState('')
  //Couldn't figure out how to do the button thing Ryan wanted
  //So I tried to make a function that would let me strike a line through
  //The task that were clicked but couldn't figure it out in time.
  const handleToggle = (id) => {
    let mapped = toDo.map(SingleTask => {
      return SingleTask.id === Number(id) ? {...SingleTask, complete: !SingleTask.complete} : {...SingleTask}
    })
  }

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
