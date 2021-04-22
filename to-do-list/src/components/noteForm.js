import { useState } from 'react'
const NoteForm = (props) => {

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [newNote, setNewNote] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
        
        setHasSubmitted(true)
      }

    return (
        <div className="noteFormContainer">
            <form className="formContainer" onSubmit = {handleSubmit}>
                <input type="text" name="newNote" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
          
        </div>
    )
}

export default NoteForm