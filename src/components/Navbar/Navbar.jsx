import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Candle from '../Candle';
import './Navbar.css';

export default function Navbar({ onRevealClick, onOtherClick }) {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  // Detectamos si estamos en la página de CardsList
  const isCardsListPage = location.pathname === '/';

  // Botón principal dinámico
  const handleMainButtonClick = () => {
    if (isCardsListPage) {
      onRevealClick();
    } else {
      navigate('/');
    }
  };

  return (
    <header className="cards-header">
      <div className="navbar-left">
        {/* Aquí ya no hay botón de música */}
      </div>

      <div className="candles-wrapper">
        <Candle />
        <h1 className="page-title">El Tarot de las Diosas</h1>
        <Candle />
      </div>

      <div className="header-right">
        <button className="reveal-button" onClick={handleMainButtonClick}>
          {isCardsListPage ? 'Liberar Arcanos' : 'Volver al inicio'}
        </button>

        {isCardsListPage && (
          <button className="other-button" onClick={onOtherClick}>
            Segunda Parte
          </button>
        )}
      </div>
    </header>
  );
}
