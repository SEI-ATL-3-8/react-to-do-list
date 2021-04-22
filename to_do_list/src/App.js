import './App.css';

import { useState } from 'react'

import FormPanel from './components/FormPanel'
import TodoListPanel from './components/TodoListPanel'


function App() {
  const [itemList, setItemList] = useState([])

  const addList = (item) => {
    const newList =[item, ...itemList]
    setItemList(newList)
  }

  return (
    <div className="App">
      <div className="FormPanel">
        <FormPanel addList={addList}/>
      </div>
      <div className="TodoListPanel">
        <TodoListPanel list={itemList}/>
      </div>
    </div>
  );
}

export default App;
