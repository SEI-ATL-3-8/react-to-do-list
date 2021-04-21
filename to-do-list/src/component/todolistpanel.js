const ToDoListPanel = props => {

    const removeItem = item => {
        let arr = [...props.toDoList]
        let completedItem = arr[arr.indexOf(item)]
        let completeList = [...props.completeList]
        arr.splice(arr.indexOf(item), 1)
        completeList.push(completedItem)
        props.setToDoList(arr)
        props.setCompleteList(completeList)
    }
    
    return(
        <div className='todolistpanel'>
            {props.toDoList.map((item, i) => 
                <div className='todolistitem' key={i}>
                    <h1>{item}</h1>
                    <button onClick={() => removeItem(item)}>Done</button>
                </div>
            )}
        </div>
    )
}

export default ToDoListPanel