import NoteForm from "./noteForm"


const Note = (props) => {
    return (
        <div className="noteContainer">
            <h1>Create new note</h1>
            <NoteForm />
        </div>
    )
}

export default Note