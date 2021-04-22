function Note(props) {

    return (
        <div className="noteCard">
            <span className="noteRemove" onClick={() => {props.handleRemoveNote(props.index)}}>X</span>
            <p className="noteContent" onClick={(e) => {props.handleComplete(e, props.index)}}>{props.content}</p>
        </div>
    )
}

export default Note