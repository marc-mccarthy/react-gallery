import React from 'react';
import {useState} from 'react';
import './GalleryList.css';
import Body from '../Body/Body';

function GalleryList(props) {
    const [likes, setLikes] = useState(0);

    function addLikes() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <ul>
                {props.listArray.map(memory => (<li>{memory.path}{memory.description}<button onClick={addLikes}>Like</button>{memory.likes}</li>))}
            </ul>
        </div>
    );
}

export default GalleryList;
