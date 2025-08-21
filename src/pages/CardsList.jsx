import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { fetchAllCards } from '../services';
import Card from '../components/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
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

  useEffect(() => {
    if (!showCards || cards.length === 0) return;
    const interval = setInterval(() => {
      setVisibleCount(count => {
        if (count >= cards.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [showCards, cards]);

  const handleCardClick = id => navigate(`/card/${id}`);

  return (
    <div className="cards-page">
      {/* ScrollToTop se activa cada vez que esta página se monta */}
      <ScrollToTop />

      <Navbar onRevealClick={() => setShowCards(true)} />

      <main className="cards-page-content">
        {!showCards && (
          <section className="welcome-section">
            <p className="welcome-text">
              Bienvenid@ a tu portal de tarot. Libera a los Arcanos eligiendo una carta.
            </p>
            <div className="deck-image-wrapper">
              <img src="/baraja.png" alt="Mazo de cartas" className="deck-image" />
            </div>

            {/* Botón para empezar lectura */}
            <div className="reading-buttons">
              <button onClick={() => setShowCards(true)}>Liberar Arcanos</button>
            </div>
          </section>
        )}

        <div className="cards-grid-background"></div>

        {showCards && (
          <div className="cards-grid">
            {cards.slice(0, visibleCount).map((card, i) => (
              <Card
                key={card.id}
                card={card}
                faceDown
                onClick={() => handleCardClick(card.id)}
                className="drop-in-card"
                style={{
                  "--rotation": `${(i - cards.length / 2) * 3}deg`,
                  animationDelay: `${i * 0.15}s`,
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
