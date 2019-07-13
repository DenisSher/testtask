import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuestApp from './App';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <GuestApp />,
    document.getElementById('root')
);

serviceWorker.unregister();
