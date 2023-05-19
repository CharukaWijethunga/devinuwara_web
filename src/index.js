import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/config';
import Title from "./Title";
const root = ReactDOM.createRoot(document.getElementById('root'));
const title = ReactDOM.createRoot(document.getElementById('title'));
root.render(<App />);
title.render(<Title/>);

