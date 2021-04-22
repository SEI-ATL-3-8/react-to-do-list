import { useState } from 'react'

const Button = () => {

const [check, setCheck] = useState('V') 

    return(
        <div className="done">
        { check === 'V' ?
        <button 
            onClick={()=> setCheck('')}
        >Done</button>
        : "done"
        }
    </div>
    )
}


export default Button

