const CompletePanel = props => {
    return(
        <div className='completePanel'>
            {props.completeList.map((item, i) => 
                <div className='completeitem' key={i}>
                <h1>{item}</h1>
                </div>
            )}
        </div>
    )
}

export default CompletePanel