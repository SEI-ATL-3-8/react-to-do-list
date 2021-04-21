import { useState } from 'react';
import ListItem from './ListItem';

const Form = (props) =>
{
    const [content, setContent] = useState('');
    const [count, setCount] = useState(0);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        props.setToDo([...props.toDo, <ListItem content={content} count={count}/>]);
        setCount(count + 1);
    }

    return (
        <form className="to-do-form">
            <input type="text" value={content} placeholder="ex. Study for a test" onChange={(e) => {setContent(e.target.value)}}/>
            <input type="submit" value="Add to List" onClick={handleSubmit}/>
        </form>
    )
}

export default Form;