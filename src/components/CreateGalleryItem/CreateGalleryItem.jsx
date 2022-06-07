import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
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
        if (newPath === '' || newDescription === '') {
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
            <form>
                <input onChange={changePath} id="newItemPath" placeholder="e.g. https://unsplash.com/photos/hrOXaenH640" type="url"/>
                <input onChange={changeDescription} id="newItemDescription" placeholder="e.g. We went to Mars and never came back." type="text"/>
                <Button variant="outlined" onClick={createMemory} id="submitButton" type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default CreateGalleryItem;
