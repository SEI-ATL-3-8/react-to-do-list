import { useState } from 'react'
import Buttons from './Buttons'

const ToDoItem = (props) => {

    const button = 'Done'

    const [doneTask, setDoneTask] = useState(props.entry)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.resolveDoneTask(doneTask)
    }

    return (
        <form className="task-container" onSubmit={handleSubmit}>
            <span className="task-entry">{props.entry}</span>
            <Buttons button={button} />
        </form>
    )
    
}






export default ToDoItem