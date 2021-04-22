import Headers from './Headers'
import DoneItem from './DoneItem'
import ClearForm from './ClearForm'

const DoneArea = (props) => {
    const header = 'Completed Tasks'
    const button = 'ClearComplete'

    return (
        <div className="area">
            <Headers header={header} />
            <ClearForm button={button} setDoneArray={props.setDoneArray} />
            {props.doneArray.map((item, i) => (
                <DoneItem key={i} entry={item} />
            ))}
        </div>
    )
}

export default DoneArea