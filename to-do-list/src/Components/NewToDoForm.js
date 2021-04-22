

const NewToDoForm = (props) => {
    return (
        <div className="create-note">
            <h1>Create New Note</h1>
                <form onSubmit={((e) => {
                    e.preventDefault()
                    props.addToToDos({
                        toDo: props.toDo,
                        done: false
                    })
                })}>
                    <input value={props.toDo} onChange={(e) => {
                        props.setToDo(e.target.value)
                    }} />
                    <input type="submit" value="Add" />
                </form>
        </div>
    )
}

export default NewToDoForm