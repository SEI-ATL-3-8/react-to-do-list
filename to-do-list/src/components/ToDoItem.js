import Buttons from './Buttons'

const ToDoItem = (props) => {

    const button = 'Done'

    const handleSubmit = (e) => {
        e.preventDefault()
        props.resolveDoneTask(props.entry, props.index)
    }

    return (
        <form className="task-container" onSubmit={handleSubmit}>
            <span className="task-entry">{props.entry}</span>
            <Buttons button={button} />
        </form>
    )
    
}

export default ToDoItem