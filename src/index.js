import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './App';  // importa il file con le rotte
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

// Misurazione performance (come prima)
reportWebVitals();
