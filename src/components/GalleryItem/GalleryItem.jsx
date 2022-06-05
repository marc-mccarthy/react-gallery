import React from 'react';
import {useState} from 'react';
import './GalleryItem.css';


function GalleryItem(props) {
    const [likes, setLikes] = useState(0);

    return (
        <li>
            <p>{props.memory.description}</p>
            <img src={props.memory.path}/>
            <button>Like</button>
            <p>{props.memory.likes} likes for this</p>
        </li>
    );
}

export default GalleryItem;
