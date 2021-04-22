import ListItem from './ListItem'

const ToDoListSection = (props) => {
    return (
        <div className="todosContent">
            <h1>Todos</h1>
            {props.allTodos.map((item, i) => (
                !item.done ? (
                    <ListItem 
                    key ={i}
                    idx = {i}
                    item = {item}
                    itemIsDone ={props.itemIsDone}
                    />
                ) : null
            ))}

            {props.allTodos.map((item, i) => (
                item.done && (
                    <ListItem 
                    key ={i}
                    idx = {i}
                    item = {item}
                    itemIsDone ={props.itemIsDone}
                    />
                )
            ))}
        </div>
    )
}

export default ToDoListSection