import { useState } from 'react'

const Button = (props) => {

const [check, setCheck] = useState('V') 

    return(
        <button 
            onClick={()=> props.setCheck(check)}
        >Done</button>
    )
}


export default Button

