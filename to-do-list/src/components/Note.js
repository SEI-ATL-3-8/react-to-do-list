const Note = ({body, completed, created, updateNote}) => (
    <div className="col">
        <div className={`card ${completed ? 'bg-green' : 'bg-red'}`}>
            <p>{body}</p>
            <button onClick={(e) => updateNote(e,created)}>{completed ? 'Not Complete' : 'Mark Done'}</button>
        </div>
    </div>
);

export default Note;