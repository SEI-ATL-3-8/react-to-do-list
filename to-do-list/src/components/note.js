import NoteForm from "./noteForm"


const Note = (props) => {
    return (
        <div className="noteContainer">
            <h1>Create new note</h1>
            <NoteForm showNotes={props.showNotes}/>
        </div>
    )
}

export default Note