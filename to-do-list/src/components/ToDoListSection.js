import ListItem from './ListItem'

const ToDoListSection = (props) => {
    return(
        <div className="todosContent">
            <h1>Todos</h1>
            
            {props.allTodos.map((item, i) => {
                <ListItem 
                key = {i}
                idx = {i}
                text = {item.text}
                itemIsDone = {props.itemIsDone}
                />
            })}
        </div>
    )
}

export default ToDoListSection