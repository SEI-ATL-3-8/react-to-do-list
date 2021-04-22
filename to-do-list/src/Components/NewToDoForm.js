import {useState} from 'react'

const [toDo, setToDo] = useState('')

const NewToDoForm = (props) => {
    return (
        <div className="create-note">
            <h1>Create New Note</h1>
                <form>
                <input type="text"></input>
                <input type="submit"></input>
                </form>
        </div>
    )
}

export default NewToDoForm