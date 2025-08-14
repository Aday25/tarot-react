// src/pages/TarotReading.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllCards } from '../services';
import Card from '../components/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CardsList.css'; // Reutilizamos estilos
import './TarotReading.css';

export default function TarotReading() {
  const [cards, setCards] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

  // Carga las cartas desde la API
  useEffect(() => {
    async function getCards() {
      try {
        const data = await fetchAllCards();
        setCards(data || []);
      } catch (err) {
        console.error('Error al cargar las cartas:', err);
        setCards([]);
      }
    }
    getCards();
  }, []);

  // Animación de aparición de cartas
  useEffect(() => {
    if (!showCards || !cards.length) return;
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

  // Selección de cartas (máx 3)
  const toggleSelectCard = (card) => {
    if (!card?.id) return;

    if (selectedCards.includes(card.id)) {
      setSelectedCards((prev) => prev.filter((id) => id !== card.id));
    } else {
      if (selectedCards.length >= 3) {
        alert('Ya has elegido 3 cartas, no puedes elegir más.');
        return;
      }
      setSelectedCards((prev) => [...prev, card.id]);
    }
  };

  // Inicia la lectura solo si hay 3 cartas seleccionadas
  const startReading = () => {
    if (selectedCards.length !== 3) return;
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
    navigate('/reading');
  };

  // Reinicia la selección y muestra alert
  const resetSelection = () => {
    setSelectedCards([]);
    alert('Selección reiniciada');
  };

  return (
    <div className="cards-page">
      <Navbar
        onRevealClick={() => setShowCards(true)}
        onOtherClick={() => alert('Ya estás en la lectura')}
      />

      <main className="cards-page-content">
        {!showCards && (
          <section className="welcome-section">
            <p className="welcome-text">
              Elige tres cartas para tu lectura del pasado, presente y futuro.
            </p>
            <div className="deck-image-wrapper">
              <img src="/manos.png" alt="Manos de pitonisa" className="deck-image" />
            </div>
          </section>
        )}

        <div className="cards-grid-background"></div>

        {showCards && cards.length > 0 && (
          <>
            <div className="cards-grid">
              {cards.slice(0, visibleCount).map((card, i) => (
                <Card
                  key={card.id}
                  card={card}
                  faceDown
                  onClick={() => toggleSelectCard(card)}
                  className={`drop-in-card ${
                    selectedCards.includes(card.id) ? 'selected' : ''
                  }`}
                  style={{
                    "--rotation": `${(i - cards.length / 2) * 3}deg`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>

            {/* Botones centrados abajo */}
            <div className="reading-buttons">
              <button
                onClick={startReading}
                disabled={selectedCards.length !== 3}
                className={selectedCards.length === 3 ? 'active' : ''}
              >
                Ver lectura
              </button>
              <button onClick={resetSelection}>
                Reiniciar
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
