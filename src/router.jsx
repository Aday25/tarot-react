import React from 'react';
// Importamos las herramientas para crear rutas en React Router v6.4+
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importamos los componentes de página que vamos a usar en las rutas
import CardsList from './pages/CardsList';
import CardDetail from './pages/CardDetail';

// Creamos el router con las rutas y qué componente se renderiza en cada path
const router = createBrowserRouter([
  {
    path: '/',            // Ruta raíz, cuando visitas /
    element: <CardsList />  // Renderiza la lista de cartas boca abajo
  },
  {
    path: '/card/:id',    // Ruta con parámetro dinámico id de carta
    element: <CardDetail /> // Renderiza el detalle de la carta según id
  }
]);

// Exportamos un componente Router que usa el RouterProvider para manejar todo
export default function Router() {
  return <RouterProvider router={router} />;
}
