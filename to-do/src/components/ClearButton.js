const Clear = (props) => {
    return(
    <button className = "clear-button"
        onClick={() => {props.setNotes([])}}>
            Clear Notes
    </button>
    )
}
export default Clear