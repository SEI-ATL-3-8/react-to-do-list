const DoneItems = (props) => {

    return (
        <div className = 'doneList' >
            <h2>Task Completed</h2>
            {props.done.map((item, i) => (
                <div key = {i} >
                    {item}
                </div>
            ))}
        </div>
    )

}

export default DoneItems;