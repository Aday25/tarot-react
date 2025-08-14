import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import './index.css';
import { MusicProvider } from './MusicContext.jsx'; // <-- importamos el contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MusicProvider>
      <Router /> {/* toda la app tiene acceso a la música */}
    </MusicProvider>
  </React.StrictMode>
);
