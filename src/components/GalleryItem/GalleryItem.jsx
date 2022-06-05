import React from 'react';
import {useState} from 'react';
import './GalleryItem.css';


function GalleryItem(props) {
    const [show, setShow] = useState(true);
    const handleClicks = () => setShow(!show);

    return (
        <li>
            {show ? <img onClick={handleClicks} src={props.memory.path}/> : <p className='descriptionMemory' onClick={handleClicks}>{props.memory.description}</p>}
            <button>Like</button>
            <p>{props.memory.likes} likes for this</p>
        </li>
    );
}

export default GalleryItem;
