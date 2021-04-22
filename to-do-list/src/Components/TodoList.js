

const TodoList = (props) => {
    return (
        <div className="to-do">
            <h1>To Dos</h1>
            {props.toDos.map((todo, i) => {
                return(
                    <div className="to-do-container">
                        <div key={i} className="to-do">
                            {todo.toDo}
                        </div>
                        <input type="checkbox" id="accept" /> 
                        {/* <button onCLick={() => test}>Done</button> */}
                    </div>
                )
            })}
        </div>
    )
}



export default TodoList