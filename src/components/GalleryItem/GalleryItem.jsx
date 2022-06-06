import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
    const [show, setShow] = useState(true);
    const handleToggleClick = () => setShow(!show);
    const handleLikeClick = () => {
        axios.put(`/gallery/like/${props.memory.id}`).then(response => {
            console.log(response);
        }).catch(error => {
            alert(`Received Error: ${error}`);
        })
    }
    const handleDeleteClick = () => {
        axios.delete(`/gallery/${props.memory.id}`).then(response => {
            console.log(response);
        }).catch(error => {
            alert(`Received Error: ${error}`);
        })
    }

    return (
        <li>
            {show ? <img onClick={handleToggleClick} alt={props.memory.path} src={props.memory.path}/> : <p className='descriptionMemory' onClick={handleToggleClick}>{props.memory.description}</p>}
            <div id='flexButtons'>
                <div><button onClick={handleLikeClick}>Like</button></div>
                <div><button className='deleteButton' onClick={handleDeleteClick}>Delete</button></div>
            </div>
            <p>{props.memory.likes} people like this</p>
        </li>
    )
}

export default GalleryItem;
