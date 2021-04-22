import { useState } from 'react';

function Categories ({ setView }) {
    const [activeLinks, setActiveLink] = useState({all:true, completed: false, current: false})

    const handleClick = (e, name) => {
        const activeLinksCopy = {...activeLinks};

        activeLinksCopy[name] = true;

        for (const key in activeLinksCopy) {
            if (key !== name) {
                activeLinksCopy[key] = false;
            }
        }
        
        setView(name);

        setActiveLink(activeLinksCopy);
    };


    return (
        <div className="btn-group">
            <button className={`${activeLinks.all ? 'active' : ''}`} onClick={(e) => handleClick(e,'all')}>All</button>
            <button className={`${activeLinks.completed ? 'active': ''}`} onClick={(e) => handleClick(e,'completed')}>Completed</button>
            <button className={`${activeLinks.current ? 'active' : ''}`} onClick={(e) => handleClick(e,'current')}>Current</button>
        </div>
    );
};






export default Categories;