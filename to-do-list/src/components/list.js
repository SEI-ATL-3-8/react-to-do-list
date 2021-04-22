import ListItem from "./listItem"

const List = (props) => {
    return (
        <div className="listContainer">
            <h1>To do's</h1>
            {props.newNote.map((note, i) => {
                return (
                  <ListItem i={i} note={note}/>   
                )
            })}
           
        </div>
    )
}

export default List