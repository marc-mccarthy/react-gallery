import axios from 'axios';
import React from 'react';
import './CreateGalleryItem.css';

function createGalleryItem() {
    if (document.getElementById("newItemPath").value === '' || document.getElementById("newItemDescription").value === '') {
        alert('You are missing an input');
    } else {
        axios.post('/gallery', {
            path: document.getElementById("newItemPath").value,
            description: document.getElementById("newItemDescription").value,
        }).then(response => {
            console.log(response);
        }).catch(error => {
            alert(`Received Error: ${error}`);
        })
    }
}

function CreateGalleryItem(props) {
    return (
        <div className="CreateGalleryItem">
            <input id="newItemPath" placeholder="Path to Image" type="url"/>
            <input id="newItemDescription" placeholder="Description" type="text"/>
            <button onClick={createGalleryItem}>Submit</button>
        </div>
    );
}

export default CreateGalleryItem;
