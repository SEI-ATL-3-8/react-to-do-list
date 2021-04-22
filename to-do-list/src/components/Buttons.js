const Buttons = (props) => {
    return (
        <div>
            { props.button === 'Submit' &&
                <input type="submit" value="Submit" className="button" />
            }
            { props.button === 'Done' && 
                <input type="submit" value="Done" className="button" />
            }
            { props.button === 'ClearCurrent' && 
                <input type="submit" value="Clear Current Tasks" className="btn-clear" />
            }
            { props.button === 'ClearComplete' && 
                <input type="submit" value="Clear Completed Tasks" className="btn-clear" />
            }
        </div>
    )
}

export default Buttons