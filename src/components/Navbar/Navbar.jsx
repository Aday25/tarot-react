import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Candle from '../Candle';
import './Navbar.css';

export default function Navbar({ onRevealClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isCardsListPage = location.pathname === '/';
  const isTarotReadingPage = location.pathname === '/tarot-reading';

  const handleMainButtonClick = () => {
    if (isCardsListPage) {
      onRevealClick(); // Liberar arcanos en CardsList
    } else {
      navigate('/'); // Volver al inicio desde cualquier otra página
    }
  };

  return (
    <header className="cards-header">
      <div className="navbar-left"></div>

      <div className="candles-wrapper">
        <Candle />
        <h1 className="page-title">El Tarot de las Diosas</h1>
        <Candle />
      </div>

      <div className="header-right">
        {/* Botón de repartir cartas primero en TarotReading */}
        {isTarotReadingPage && (
          <button className="other-button" onClick={onRevealClick}>
            Empezar Lectura
          </button>
        )}

        {/* Botón principal: Liberar arcanos / Volver al inicio */}
        <button className="reveal-button" onClick={handleMainButtonClick}>
          {isCardsListPage ? 'Liberar Arcanos' : 'Volver al inicio'}
        </button>

        {/* Botón para ir a lectura desde CardsList */}
        {isCardsListPage && (
          <button className="other-button" onClick={() => navigate('/tarot-reading')}>
            Lectura Tarot
          </button>
        )}

        {/* Aquí iría tu MusicButton u otros botones que tengas */}
      </div>
    </header>
  );
}
