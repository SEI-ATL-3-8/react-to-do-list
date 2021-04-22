import Headers from './Headers'
import ToDoItem from './ToDoItem'
import ClearForm from './ClearForm'

const ToDoArea = (props) => {
    const header = 'Current Tasks'
    const button = 'ClearCurrent'

    return (
        <div className="area">
            <Headers header={header} />
            <ClearForm button={button} setTaskArray={props.setTaskArray} />
            {props.taskArray.map((item, i) => (
                <ToDoItem key={i} index={i} entry={item} resolveDoneTask={props.resolveDoneTask} />
            ))}
        </div>
    )    
}

export default ToDoArea