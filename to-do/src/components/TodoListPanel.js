import ListItem from './ListItem'
import Clear from './ClearButton'
const TodoPanel = (props) => {
    return(
    <div className = "list-container">
        {props.notes.map((note, i) => {
            return(
                <ListItem 
                key = {i}
                note = {note}/>
            )
        })}
        <Clear 
        setNotes = {props.setNotes}
        />
    </div>
    )
}

export default TodoPanel