const ListSection = (props) => {

    // const markDone = () => {
    //     props.setDone(true)
    // }
    
    return (
        <div className = 'list-section' >
            <h2>The List</h2>
            <div className = 'list-area' >
                {props.list.map((item, i) => (
                    <div className = 'item' key = {i} >
                        {[item]}
                    <button className = 'doneBtn' value = 'Done' name = {item} onClick = {(e) => props.setDone([e.target.name, ...props.done])} >Done</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListSection;