import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Para saber en qué página estamos y navegar
import Candle from '../Candle';
import './Navbar.css';

export default function Navbar({ onRevealClick, onOtherClick }) {
  const location = useLocation(); // Hook para obtener la ruta actual
  const navigate = useNavigate(); // Hook para navegar programáticamente

  // Detectamos si estamos en la página de CardsList o en CardsDetail
  const isCardsListPage = location.pathname === '/';
  
  // Función para el botón principal: Revelar cartas o volver al inicio
  const handleMainButtonClick = () => {
    if (isCardsListPage) {
      onRevealClick(); // Revelar cartas en la página principal
    } else {
      navigate('/'); // Volver al inicio desde cualquier otra página
    }
  };

  return (
    <header className="cards-header">
      <div className="candles-wrapper">
        <Candle />
        <h1 className="page-title">El Tarot de las Diosas</h1>
        <Candle />
      </div>

      <div className="header-right">
        {/* Botón principal dinámico */}
        <button className="reveal-button" onClick={handleMainButtonClick}>
          {isCardsListPage ? 'Liberar Arcanos' : 'Volver al inicio'}
        </button>

        {/* Segundo botón solo si estamos en la página principal */}
        {isCardsListPage && (
          <button className="other-button" onClick={onOtherClick}>
            Segunda Parte
          </button>
        )}
      </div>
    </header>
  );
}
