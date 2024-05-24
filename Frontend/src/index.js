import React from "react";
import  ReactDOM  from "react-dom";

import { Provider } from './context/context';
import './index.css';
import App from './App';

// ReactDOM.render(<App/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App />
    </Provider>
);