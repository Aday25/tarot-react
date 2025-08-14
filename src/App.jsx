import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsList from './pages/CardsList';
import CardsDetail from './pages/CardsDetail';
import { MusicProvider } from './context/MusicContext'; // Contexto de música

function App() {
  return (
    <MusicProvider> {/* Un único proveedor para toda la app */}
      <Router>
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/card/:id" element={<CardsDetail />} />
        </Routes>
      </Router>
    </MusicProvider>
  );
}

export default App;