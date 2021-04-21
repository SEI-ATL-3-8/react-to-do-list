const FormPanel = props => {
    const updateToDo = e => {
        e.preventDefault()
        const toDoContent = props.formInput
        let arr = [...props.toDoList]
        arr.unshift(toDoContent)
        props.setToDoList(arr)
    }

    return(
        <div className='formPanel'>
            <form onSubmit={updateToDo}>
                <input type='text' name={props.formInput} value={props.formInput} placeholder='ADD' onChange={e => props.setFormInput(e.target.value)} />
                <input type='submit' value='+' />
            </form>

        </div>
    )
}

export default FormPanel