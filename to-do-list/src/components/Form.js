import { useState } from 'react'

const Create = (props) => {

    const [newItems, setNewItems] = useState('')


    return (
        <div className= "create">
        <h1>Create New Note</h1>
        <form onSubmit= {((e) => {
            e.preventDefault()
            props.addToDoList(newItems)
        })}>

            <input value= {newItems} placeholder="New Item" onChange= {(e) => {setNewItems(e.target.value)}}>
            </input>
            <input type ="submit" value="Submit"></input>

        </form>



        </div>


    )
}
