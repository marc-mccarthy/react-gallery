import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Body.css';
import GalleryList from '../GalleryList/GalleryList';

function Body() {
    const [galleryList, setGalleryList] = useState([]);
    useEffect(() => {
        getGalleryList();
    }, []);
    
    const getGalleryList = () => {
        axios.get('/gallery').then(response => {
            setGalleryList(response.data);
        }).catch(error => {
            console.log(`Error: ${error}`);
        });
    }

    return (
        <div className="Body">
            <p>This is the Gallery Below:</p>
            <GalleryList listArray = {galleryList}/>
        </div>
    );
}

export default Body;
