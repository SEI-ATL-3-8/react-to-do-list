import './App.css';
import { useState } from 'react'
import FormArea from './components/FormArea'
import ToDoArea from './components/ToDoArea'
import DoneArea from './components/DoneArea'
import Headers from './components/Headers'

function App() {
  const header = 'Task App'

  const [taskArray, setTaskArray] = useState([])
  const [doneArray, setDoneArray] = useState([])

  const addToTaskArray = (item) => {
    const newTask = [...taskArray, item]
    setTaskArray(newTask)
  }

  const resolveDoneTask = (item) => {
    const newDone = [...doneArray, item]
    setDoneArray(newDone)

    const removedTask = taskArray.filter(e => e !== item)
    setTaskArray(removedTask)
  }


  return (
    <div className="App">
        <Headers header={header}/>
      <main className="container">
        <FormArea addToTaskArray={addToTaskArray} />
        <ToDoArea taskArray={taskArray} resolveDoneTask={resolveDoneTask} />
        <DoneArea doneArray={doneArray} />
      </main>
    </div>
  );
}

export default App;
