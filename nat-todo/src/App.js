import './App.css';
import{ useState } from 'react'

import Form from './Component/Form'
import Panel from './Component/Panel'

function App() {

const [item, setItem] = useState([])

const addItem = (item) => {

  const newItem = [item, ...item]
  setItem(newItem)

}

return (

    <div className="Main">
      <h1>Nat's To Do List</h1>
        <div>
            <Form
            addItem={addItem}/>
            <Panel
            item={item} setItem={setItem} />
        </div>
    </div>
  );
}

export default App;
