import React from 'react';
import './App.css';
import Body from '../Body/Body';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">My Gallery</h1>
            </header>
            <Body/>
        </div>
    );
}

export default App;
