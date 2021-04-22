const ListSection = (props) => {

    const markDone = () => {
        props.setDone(true)
    }
    
    return (
        <div className = 'list-section' >
            <h2>The List</h2>
            <div className = 'list-area' >
                {props.list.map((item, i) => (
                    <div className = 'item' key = {i} >
                        {[item]}
                    {props.done ?
                    <div>Completed</div>
                    :
                    <button className = 'doneBtn' key = {i} onClick = {markDone} >Done</button>
                    }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListSection;