import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos el router que acabamos de definir
import Router from './router';
// Archivo CSS global, aquí puedes poner estilos básicos o reset
import './index.css';

// Renderizamos la app en el root, usando React.StrictMode para mejores prácticas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router /> {/* Aquí carga toda la navegación de la app */}
  </React.StrictMode>
);
