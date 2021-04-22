import Note from '../components/Note';

const Notes = ({notes, view, setNotes}) => {
    const filteredNotes = notes.filter(note => {
        if (view === 'all') {
            return true;
        }

        else if (view === 'completed') {
            return note.completed;
        } 

        else {
            return !note.completed;
        }
    });

    const updateNote = (e, created) => {
        const notesCopy = [...notes];

        const foundNoteIndex = notes.findIndex(note => note.created === created);

        notesCopy[foundNoteIndex].completed = !notesCopy[foundNoteIndex].completed;

        setNotes(notesCopy);
    };

    return (
        filteredNotes.map((note, index) => (
            <Note key={note.created} updateNote={updateNote} {...note} index={index} />
        ))
    );

}

export default Notes;