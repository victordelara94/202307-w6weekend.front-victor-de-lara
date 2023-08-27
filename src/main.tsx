import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';

ReactDOM.createRoot(document.querySelector('.container')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
