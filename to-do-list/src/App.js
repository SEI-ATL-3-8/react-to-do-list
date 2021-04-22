import './App.css';
import { useState } from 'react'
import FormArea from './components/FormArea'
import ToDoArea from './components/ToDoArea'
import DoneArea from './components/DoneArea'
import Headers from './components/Headers'


function App() {
  const header = 'Tasks App'
  const subHeader = 'Powered By React'
  const [taskArray, setTaskArray] = useState([])
  const [doneArray, setDoneArray] = useState([])

  const addToTaskArray = (item) => {
    const newTask = [...taskArray, item]
    setTaskArray(newTask)
  }

  const resolveDoneTask = (item, i) => {
    const newDone = [...doneArray, item]
    setDoneArray(newDone)

    const removedTask = taskArray.filter((item, itemIndex) => itemIndex !== i)
    setTaskArray(removedTask)
  }

  return (
    <div className="App">
        <Headers header={header} subHeader={subHeader} />
      <main className="container">
        <FormArea addToTaskArray={addToTaskArray} />
        <ToDoArea taskArray={taskArray} resolveDoneTask={resolveDoneTask} setTaskArray={setTaskArray} />
        <DoneArea doneArray={doneArray} setDoneArray={setDoneArray} />
      </main>
    </div>
  );
}

export default App;
