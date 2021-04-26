const ListItem = (props) => {
  return (
      <div className="singleItem">
          <p>{props.item.text}</p>
          {props.item.done ? <p>Done</p> : 
          <button onClick={() => props.itemIsDone(props.item, props.idx)}>Done</button>}
          
      </div>
  )
}

export default ListItem