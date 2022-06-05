import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Body.css';
import GalleryList from '../GalleryList/GalleryList';

function Body() {
    const [memories, setMemories] = useState([]);
    useEffect(() => {
        getMemories();
    }, []);
    
    const getMemories = () => {
        axios.get('/gallery').then(response => {
            setMemories(response.data);
        }).catch(error => {
            alert(`Received Error: ${error}`);
        });
    }

    return (
        <GalleryList memories = {memories}/>
    );
}

export default Body;
