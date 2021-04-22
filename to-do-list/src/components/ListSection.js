const ListSection = (props) => {
    
    return (
        <div className = 'list-section' >
            <h2>The List</h2>
            <div className = 'list-area' >
                {props.list.map((item, i) => (
                    <div key = {i} >
                        {[item]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListSection;