import {useState} from 'react'

const Form = (props) => {
    const [note, setNote] = useState('')
    return (  
        <form onSubmit={((e) => {
            e.preventDefault()
            props.addToNotes(note)
        })}>
            Note
            <input value={note} onChange={(e) => { setNote(e.target.value)}}/>
            <input type="submit" value="Add!" />
        </form>
    )
}

export default Form