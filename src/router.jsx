import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsList from './pages/CardsList'; // ajusta ruta si hace falta

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsList />} />
        {/* Aquí puedes añadir más rutas si quieres */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
