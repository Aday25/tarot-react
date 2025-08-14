import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsList from './pages/CardsList';
import CardsDetail from './pages/CardsDetail';
import TarotReading from './pages/TarotReading';
import FinalReading from './pages/FinalReading'; // NUEVO

function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<div>Página no encontrada</div>} />
          <Route path="/" element={<CardsList />} />
          <Route path="/card/:id" element={<CardsDetail />} />
          <Route path="/tarot-reading" element={<TarotReading />} /> {/* Lectura */}
          <Route path="/reading" element={<FinalReading />} /> {/* Resultado final */}
        </Routes>
      </Router>
  );
}

export default App;
