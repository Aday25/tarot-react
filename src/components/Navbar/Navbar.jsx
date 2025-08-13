import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Candle from '../Candle';
import './Navbar.css';

export default function Navbar({ onRevealClick, onOtherClick }) {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const [isPlaying, setIsPlaying] = useState(false);

  // Detectamos si estamos en la página de CardsList
  const isCardsListPage = location.pathname === '/';
  
  // Reproducir música al cargar o en primer click
  useEffect(() => {
    const audio = document.getElementById('bg-music');
    if (!audio) return;
    audio.volume = 0.5;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    const handleFirstInteraction = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        window.removeEventListener('pointerdown', handleFirstInteraction);
      }).catch(() => {});
    };

    window.addEventListener('pointerdown', handleFirstInteraction);
    return () => window.removeEventListener('pointerdown', handleFirstInteraction);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

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
        {/* Botón de sonido */}
        <button
          className="music-btn"
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          title={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
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
