const ListItem = (props) => {
    return(
        <div key= {props.i} className="each-note">
            {props.note}
        </div>
    )
}

export default ListItem