import React from 'react'
import './App.css';
import { useState } from 'react'

import Create from './components/Create'
import List from './components/List'


function App() {
  const [contentStack, setContentStack] = useState([])

  const addItemToList = (item) => {
    const newItems = [...contentStack, item]
    setContentStack(newItems)
  }

  return (
    <div className="container">
      <Create addToList={addItemToList} />
      <List contentStack={contentStack}/>
    </div>
  );
}

export default App;
