const DoneItem = (props) => {
    return (
        <div className="task-container-done">
            <span className="task-entry-done">{props.entry}</span>
        </div>
    )
}

export default DoneItem