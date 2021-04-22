import {useState} from 'react'

const Done = () => {
    const [done, setDone] = useState('Button')
    return(
        <div>
        {done === 'Button' ?
        <button onClick = {() => {setDone('Done')}}>Done</button>
        :  "✅" }
        </div>
    )
}
export default Done