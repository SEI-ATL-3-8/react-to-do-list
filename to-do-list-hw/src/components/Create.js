import { useState } from 'react'

const Create = (props) => {

    const [content, setContent] = useState('')
    // console.log(content)


    return (
        <div className="create">
            <h1>Create new note</h1>
            <form onSubmit={((e)=>{
                e.preventDefault()
               props.addToList(content)
            })}> 
                <input placeholder="New Item" value={content} onChange={(e)=>{setContent(e.target.value)}} ></input>
                <input type="submit" value="Add!"></input>
            </form>
        </div>
    )
}


export default Create