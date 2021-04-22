import React from 'react'
import {useState} from 'react'
import SingleTasks from './SingleTask'

const Form = (props) => {
    const [task, setTask] = useState('')
    const [count, setCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setToDo([...props.toDo, <SingleTasks task={task} count={count} />])
        setCount(count + 1)
    }

    return (
        <div className="taskCreator">
           <form className="toDos">
               <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}} />
               <input type="submit" onClick={handleSubmit} />
           </form>
        </div>
    )
}

export default Form
