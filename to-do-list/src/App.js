import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoListPanel from './component/todolistpanel'
import FormPanel from './component/formpanel';
import CompletePanel from './completepanel';

function App() {
  const [formInput, setFormInput] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [completeList, setCompleteList] = useState([])

  return (
    <div className="App">
      <h1>MY TO DO LIST</h1>
      <div className='titles'>
        <h1>ADD ITEM</h1>
        <h1>TODO LIST</h1>  
        <h1>COMPLETED</h1>
      </div>
      <div className='panelContainers'>
        <FormPanel
          setFormInput={setFormInput}
          formInput={formInput}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
        <ToDoListPanel
          toDoList={toDoList}
          setToDoList={setToDoList}
          completeList={completeList}
          setCompleteList={setCompleteList}
        />
        <CompletePanel
          completeList={completeList}
          setCompleteList={setCompleteList}
        />
      </div>
    </div>
  );
}

export default App;
