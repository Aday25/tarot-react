// Router.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas
import CardsList from './pages/CardsList';
import CardsDetail from './pages/CardsDetail';
import TarotReading from './pages/TarotReading';
import FinalReading from './pages/FinalReading';

// Rutas
const router = createBrowserRouter([
  { path: '/', element: <CardsList /> },
  { path: '/card/:id', element: <CardsDetail /> },
  { path: '/tarot-reading', element: <TarotReading /> },
  { path: '/reading', element: <FinalReading /> },
  { path: '*', element: <div>Página no encontrada</div> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
