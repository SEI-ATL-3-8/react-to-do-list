import { useState } from 'react';

function CreateNote({setNotes,notes}) {
    let counter = 0;

    const [formInput, setFormInput] = useState('');
    
    const handleChange = (e) => {
        const { value } = e.target;

        setFormInput(value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (formInput !== '') {

            setNotes([
                {
                    body: formInput,
                    completed: false,
                    created: new Date().getTime()
                },
                ...notes
            ]);
          
            setFormInput('');
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <h3>Create a Note</h3>
            <input onChange={handleChange} type="text" name="note" value={formInput} />
            <input type="submit" value="Add Note" />
        </form>
    );


};


export default CreateNote;