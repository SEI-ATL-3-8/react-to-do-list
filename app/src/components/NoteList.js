import Note from './Note'

function NoteList(props) {
    return (
        <div className="listContainer">
            <h1>To Do's</h1>
            {props.notes.map((note, i) => {
                return (
                    <Note 
                        key = {i}
                        index = {i}
                        content = {note.content}
                        complete = {note.cmplete}
                        notes = {props.notes}
                        setNotes = {props.setNotes}
                        handleComplete = {props.handleComplete}
                        handleRemoveNote = {props.handleRemoveNote}
                    />
                )
            })}
        </div>
    )
}

export default NoteList