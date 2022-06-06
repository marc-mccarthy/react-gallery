import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateGalleryItem from '../CreateGalleryItem/CreateGalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function Body() {
    const [memories, setMemories] = useState([]);
    useEffect(() => {
        getMemories();
    }, [{memories}]);
    const getMemories = () => {
        axios.get('/gallery').then(response => {
            setMemories(response.data);
        }).catch(error => {
            alert(`Received Error: ${error}`);
        });
    }

    return (
        <div>
            <CreateGalleryItem/>
            <GalleryList memories = {memories}/>
        </div>
    );
}

export default Body;
