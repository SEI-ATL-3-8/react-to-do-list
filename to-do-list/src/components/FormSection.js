const FormSection = (props) => {

    // const addList = (e) => {
    //     e.preventDefault()
    //     props.setList([...props.toDo])
    //   }
    
    return (
        <div className = 'form-section' >
            <form>
                <h2>Enter What You Need to Do Here:</h2>
                <input type = 'text' name = 'toDo' placeholder = 'What do you need to do?' value = {props.toDo.value} onChange = {(e) => props.setToDo(e.target.value)} />
                <input type = 'button' value = 'submit' onClick = {() => props.setList([props.toDo, ...props.list])} />
            </form>
        </div>
    )
}

export default FormSection;