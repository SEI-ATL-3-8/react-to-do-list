const DoneItems = (props) => {

    return (
        <div className = 'doneList' >
            {props.done.map((item, i) => (
                <div key = {i} >
                    {item}
                </div>
            ))}
        </div>
    )

}

export default DoneItems;