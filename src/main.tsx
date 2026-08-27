import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// CSS is processed by the bundler; TypeScript does not need a declaration for it.
// @ts-ignore
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

