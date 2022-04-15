/*
React 17

import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
/* import App from './App'; */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

/* React 18 */
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
/* const modal = ReactDOM.createPortal(child, container)
 */root.render(
  <App />
);
