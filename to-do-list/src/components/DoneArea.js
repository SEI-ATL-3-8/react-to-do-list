import Headers from './Headers'
import DoneItem from './DoneItem'

const DoneArea = (props) => {
    const header = 'Completed Tasks'

    return (
        <div className="area">
            <Headers header={header} />
            {props.doneArray.map((item, i) => (
                <DoneItem key={i} entry={item} />
            ))}
        </div>
    )
}

export default DoneArea