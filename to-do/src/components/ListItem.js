import Done from "./DoneButton"


const ListItem = (props) => {
    return(
        <div className="each-note">
            {props.note}
            <Done />
        </div>
    )
}

export default ListItem