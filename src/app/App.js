import React from 'react';
import './App.scss';
import Pages from 'pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
