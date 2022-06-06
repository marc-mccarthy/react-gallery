import React, {useState} from 'react';
import axios from 'axios';
import './CreateGalleryItem.css';

function CreateGalleryItem(props) {

    const [newPath, setPath] = useState('');
    const [newDescription, setDescription] = useState('');

    const changePath = (event) => {
        setPath(event.target.value);
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    function createMemory() {
        if (document.getElementById("newItemPath").value === '' || document.getElementById("newItemDescription").value === '') {
            alert('You are missing an input');
        } else {
            axios.post('/gallery', {
                path: newPath,
                description: newDescription,
            }).then(response => {
                console.log(response);
            }).catch(error => {
                alert(`Received Error: ${error}`);
            })
        }
    }

    return (
        <div className="CreateGalleryItem">
            <input onChange={changePath} id="newItemPath" placeholder="Path to Image" type="url"/>
            <input onChange={changeDescription} id="newItemDescription" placeholder="Description" type="text"/>
            <button onClick={createMemory}>Submit</button>
        </div>
    );
}

export default CreateGalleryItem;
