

const ListItem = (props) =>
{
    return (
        <div className="listItem" key={props.count}>
            {props.content}
            <input type="checkbox"/>
        </div>
    )
}

export default ListItem;