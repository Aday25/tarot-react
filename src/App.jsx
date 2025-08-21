import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsList from './pages/CardsList';
import CardsDetail from './pages/CardsDetail';
import TarotReading from './pages/TarotReading';
import FinalReading from './pages/FinalReading'; 
import './App.css';
import './Card.css';
import './CardsList.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<div>Página no encontrada</div>} />
          <Route path="/" element={<CardsList />} />
          <Route path="/card/:id" element={<CardsDetail />} />
          <Route path="/tarot-reading" element={<TarotReading />} /> 
          <Route path="/reading" element={<FinalReading />} /> 
        </Routes>
      </Router>
  );
}

export default App;
