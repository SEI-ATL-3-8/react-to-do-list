import {React, useState} from 'react'


const Form = (props) => {

  
    const[newItem, setNewItem] = useState("")

    const handleAdd = (e) => {
        props.addToList(e.target.name)
        setNewItem("")
    }

    return(
        <div className = 'form-container'>
            <form className='form'>
                <input className = 'create-input' type ='text' name = 'toDo' placeholder = 'To Do' value = {newItem} onChange = {(e) => setNewItem(e.target.value)} />
        
                <input type = 'button' value = 'Add To List' name = {newItem} onClick =  {(e) => handleAdd(e) } />
            </form>
        </div>
    )

}

export default Form