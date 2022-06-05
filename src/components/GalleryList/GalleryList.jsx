import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

    return (
        <div>
            <ul>
                {props.memories.map(memory => (<GalleryItem memory = {memory}/>))}
            </ul>
        </div>
    );
}

export default GalleryList;
