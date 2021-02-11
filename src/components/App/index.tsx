import React from 'react';
import './index.scss';

const kawaii = require('../../svg/react-kawaii.svg');

const App = () => {
    return (
        <div id="app-component">
            <div>
                <h1>React-typescript</h1>
                <h2>Webpack boilerplate</h2>
                <img src={kawaii} id="react-kawaii" />
                <p>
                    Author: Jascha Huisman
                    <br />
                    <a href="https://github.com/jaschahuisman">github.com/jaschahuisman</a>
                </p>
            </div>
        </div>
    )
}

export default App;