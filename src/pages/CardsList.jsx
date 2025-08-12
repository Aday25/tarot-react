import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllCards } from '../services';
import Card from '../components/Card';
import Candle from '../components/Candle';
import './CardsList.css';

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCards() {
      const data = await fetchAllCards();
      setCards(data);
    }
    getCards();
  }, []);

  // Animación de aparición progresiva de cartas
  useEffect(() => {
    if (!showCards || cards.length === 0) return;

    const interval = setInterval(() => {
      setVisibleCount((count) => {
        if (count >= cards.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [showCards, cards]);

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="cards-page">
      {/* HEADER FIJO */}
      <header className="cards-header">
        <div className="candles-wrapper">
          <Candle />
          <h1 className="page-title">Cartas de Tarot</h1>
          <Candle />
        </div>
        <section className="welcome-section">
          <p>
            Bienvenid@ a tu portal de cartas de tarot. Aquí descubrirás los secretos y mensajes que el destino tiene preparados para ti.
          </p>
        </section>
        <button className="reveal-button" onClick={() => setShowCards(true)}>
          Revelar Cartas
        </button>
      </header>

      {/* Fondo animado detrás de las cartas */}
      <div className="cards-grid-background"></div>

      {/* GRID DE CARTAS */}
      <div className="cards-grid">
        {showCards &&
          cards.slice(0, visibleCount).map((card) => (
            <Card
              key={card.id}
              card={card}
              faceDown={true}
              onClick={() => handleCardClick(card.id)}
              className="fade-in-card"
            />
          ))}
      </div>
    </div>
  );
}
