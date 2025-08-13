import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllCards } from '../services';
import Card from '../components/Card';
import Header from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
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
      setVisibleCount((count) => {
        if (count >= cards.length) {
          clearInterval(interval);
          return count;
        }
        return count + 9;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [showCards, cards]);

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="cards-page">
      <Header 
        onRevealClick={() => setShowCards(true)} 
        onOtherClick={() => alert('Pendiente de la parte 2')}
      />

      <section className="welcome-section">
        <p>Bienvenid@ a tu portal de cartas de tarot.</p>
      </section>

      <div className="cards-grid-background"></div>

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

      <Footer />
    </div>
  );
}
