import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router /> {/* toda la app tiene acceso a la música */}
  </React.StrictMode>
);
