import { useState } from 'react'
const NoteForm = (props) => {

    
    const [newNote, setNewNote] = useState('')


    return (
        <div className="noteFormContainer">
            <form className="formContainer" onSubmit={((e) => {
             e.preventDefault()
             props.showNotes(newNote)
         })}>
                <input type="text" name="newNote" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
          
        </div>
    )
}

export default NoteForm