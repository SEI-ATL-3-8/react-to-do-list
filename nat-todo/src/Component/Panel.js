
import userInput from './userInput'

const Panel = (props) => {

    return(

    <div className = "list">

        {props.item.map((item, i) => {
            return(

            <userInput

                key = {i}
                item = {item}/>
            )

        })}

    </div>

    )
    
}

export default Panel
