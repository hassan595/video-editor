import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/globals.css'

import reportWebVitals from './reportWebVitals';
import {EditorWithStore} from "./components/Editor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EditorWithStore />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
