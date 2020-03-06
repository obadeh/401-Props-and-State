import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './components/app.js';
import { BrowserRouter } from 'react-router-dom';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress &&
        <div className="spin">
            <Loader type="ThreeDots" color="#204160" height="100" width="100" />
        </div>
    );
}


ReactDOM.render(<BrowserRouter><App /><LoadingIndicator /></BrowserRouter>, document.getElementById('root'));