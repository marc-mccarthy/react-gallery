// import React from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import './App.css';
import Body from '../Body/Body';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Avatar alt="MJ" src="/images/banana-dance.gif" sx={{width: 48, height: 48}}/>
                <h1 className="App-title">My family, some nature, and a Jet Car!</h1>
                <Avatar alt="MJ" src="/images/banana-dance.gif" sx={{width: 48, height: 48}}/>
            </header>
            <Body/>
        </div>
    );
}

export default App;
