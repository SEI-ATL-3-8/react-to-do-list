import ListItem from "./ListItem"

const TodoListPanel = (props) => {
    return (
        <div className="todoListPanel">
            <h2>Todo's</h2>
            {props.items
                .sort(function (x, y) {
                    return (x.done === y.done) ? 0 : x.done ? 1 : -1;
                })
                .map((item, i) => {
                    return <ListItem key={i} item={item} index={i} doneHandler={props.doneHandler} />
                })}
        </div>
    )
}
export default TodoListPanel