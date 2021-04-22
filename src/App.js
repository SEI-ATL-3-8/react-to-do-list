import { useState } from 'react'
import './App.css';
import TodoListPanel from './components/TodoListPanel';
import FormPanel from './components/FormPanel';

function App() {

  const [items, setItems] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const item = {
      text: e.target.item.value,
      done: false
    }
    setItems([item, ...items])
  }

  const doneHandler = (index) => {
    const newItems = [...items]
    newItems[index]["done"] = !newItems[index]["done"]
    setItems(newItems)
  }
  return (
    <div className="App">
      <FormPanel submitHandler={submitHandler} />
      <TodoListPanel items={items} doneHandler={doneHandler} />
    </div>
  );
}

export default App;
