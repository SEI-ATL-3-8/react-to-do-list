const ListItem = ({ item, doneHandler, index }) => {
    return (
        <div>
            <span className={item.done ? 'done' : ''}>{item.text}</span>
            {!item.done && <button onClick={() => doneHandler(index)}>Done</button>}
        </div>
    )
}
export default ListItem