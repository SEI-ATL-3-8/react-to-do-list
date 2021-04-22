import ListItem from './ListItem'
const Completed = (props) => {
    return (
        <div className="completed">
            <h1>Done</h1>
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

export default Completed