import {useState} from 'react'
const ListItem = (props) => {

    const [color, setColor] = useState('')
    return (
        <div className="listItemContainer">
            <div className="item" key = {props.i}>{props.note}</div>
            <button className={`doneButton ${color}`} onClick={() => { setColor('green') }}>done</button>
        </div>
    )
}

export default ListItem