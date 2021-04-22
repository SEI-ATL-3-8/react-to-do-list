const TodoListPanel = (props) =>{
    return(
        <div className="TodoListPanel">
            <h1>To do List</h1>
            {props.list.map((layer, i) => {
                return (
                    <div key={i} className="item">
                        
                        {layer}
                    </div>
                )
            })}
        </div>

    )
}
export default TodoListPanel