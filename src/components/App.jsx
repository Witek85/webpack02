import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import style from './App.scss';

const App = () => (
    <div className={style.border}>
        <Timer />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)