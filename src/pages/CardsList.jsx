import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllCards } from '../services';
import Card from '../components/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import './CardsList.css';
import './TarotReading.css'; // Importamos las animaciones

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();

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

  const handleCardClick = id => navigate(`/card/${id}`);

  return (
    <div className="cards-page">
      <ScrollToTop />
      <Navbar onRevealClick={() => setShowCards(true)} />

      <main className="cards-page-content">
        {!showCards && (
          <section className="welcome-section">
            <p className="welcome-text">
              Bienvenid@ a tu portal de tarot. Libera a los Arcanos y elige una carta.
            </p>
            <div className="deck-image-wrapper">
              <img src="/baraja.png" alt="Mazo de cartas" className="deck-image" />
            </div>
            <div className="reading-buttons">
              <button onClick={() => setShowCards(true)}>Liberar Arcanos</button>
            </div>
          </section>
        )}

        <div className="cards-grid-background"></div>

        {showCards && cards.length > 0 && (
          <div className="cards-grid">
            {cards.map((card, i) => (
              <Card
                key={card.id}
                card={card}
                faceDown={true}
                onClick={() => handleCardClick(card.id)}
                className="drop-in-card"
                style={{
                  "--rotation": `${(i - cards.length / 2) * 3}deg`,
                  animationDelay: `${i * 0.07}s`,
                }}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
