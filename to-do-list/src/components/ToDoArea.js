import Headers from './Headers'
import ToDoItem from './ToDoItem'

const ToDoArea = (props) => {
    const header = 'Task List'

    return (
        <div className="area">
            <Headers header={header} />
            {props.taskArray.map((item, i) => (
                <ToDoItem key={i} index={i} entry={item} resolveDoneTask={props.resolveDoneTask} />
            ))}
        </div>
    )    
}

export default ToDoArea