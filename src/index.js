import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './components/app.js';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
    <BrowserRouter>
<App />
</BrowserRouter>
,
     document.getElementById('root'));