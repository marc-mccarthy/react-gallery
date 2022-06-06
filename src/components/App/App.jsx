import React from 'react';
import './App.css';
import CreateGalleryItem from '../CreateGalleryItem/CreateGalleryItem';
import Body from '../Body/Body';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">My family, some nature, and a Jet Car!</h1>
            </header>
            <CreateGalleryItem/>
            <Body/>
        </div>
    );
}

export default App;
