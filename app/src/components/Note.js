function Note(props) {

    return (
        <div className="noteContainer">
            <p className="noteContent" onClick={(e) => {props.handleComplete(e, props.index)}}>{props.content}</p>
            <span className="noteRemove" onClick={() => {props.handleRemoveNote(props.index)}}>X</span>
        </div>
    )
}

export default Note