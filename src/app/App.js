import React from 'react';
import './App.scss';
import Pages from 'pages';
import store from 'Store/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Pages />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
