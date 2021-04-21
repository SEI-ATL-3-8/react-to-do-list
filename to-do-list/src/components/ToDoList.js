import ListItem from './ListItem';

const ToDoList = (props) =>
{
    return (
        <div className="to-do">
            <h1>To Do</h1>
            {props.toDo}
        </div>
    )
}

export default ToDoList;