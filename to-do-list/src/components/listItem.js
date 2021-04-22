const ListItem = (props) => {
    return (
        <div className="listItemContainer">
            <div className="item" key = {props.i}>{props.note}</div>
            <button className="doneButton">done</button>
        </div>
    )
}

export default ListItem