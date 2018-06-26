import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import './App.scss';

const App = () => (
    <div>
        <Timer />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)