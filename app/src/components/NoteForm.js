import { useState } from 'react'

function NoteForm(props) {

    const [content, setContent] = useState('')


    const handleFormSubmit = (e) => {
        e.preventDefault()
        let newNote = {
            content: content,
            complete: false
        }
        props.setNotes([...props.notes, newNote])
        setContent('')
    }

    return (
        <form className="noteForm" onSubmit={handleFormSubmit}>
            <input className="formInput" value={content} onChange={(e) => {setContent(e.target.value)}} />
            <input className="formSubmit" type="submit" />
        </form>
    )
}

export default NoteForm