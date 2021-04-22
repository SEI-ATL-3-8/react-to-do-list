import {useState} from 'react'



const Create =(props) =>{

    const [list,setList] = useState("")

    return(
        <div className="list">
            <form onSubmit={((e)=>{
                e.preventDefault()
                props.addList(list)
            })}>
                <input value={list} onChange={(e)=>{
                    setList(e.target.value)
                }}/>
                <input type="submit" value="Add!" />
            </form>
        </div>

    )
}

export default Create