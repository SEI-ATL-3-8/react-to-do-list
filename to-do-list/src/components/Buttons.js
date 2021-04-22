import { useState } from 'react'

const Buttons = (props) => {
    return (
        <div>
            { props.button === 'Submit' &&
                <input type="submit" value="Submit" className="btn-submit" />
            }
            { props.button === 'Done' && 
                <input type="submit" value="Done" className="btn-done" />
            }

        </div>
    )
}






export default Buttons