
import {useState} from 'react'

const userInput = (props) => {

    const [item, setItem] = useState

    return (

        <div className="Form">
        <form onSubmit={((e) => {
            e.preventDefault()
            props.addToNotes(item)

                })}>

            Add to Your List

            <input value={item} onChange={(e) => { setItem(e.target.value)}}/>
            <input type="submit" value="Add Now" />
        </form>
        </div>
    )
}

export default userInput
