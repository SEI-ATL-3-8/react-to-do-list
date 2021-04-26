import ListItem from './ListItem'

const ToDoListSection = (props) => {
    return (
        <div>
            <h1>Hey Im the todo lost section</h1>
            
            {props.allTodos.map((item, i) => (
                <ListItem 
                key ={i}
                idx ={i}
                text = {item.text}
                itemIsDone = {props.itemIsDone}
                />
            ))}
        </div>
    )
}

export default ToDoListSection