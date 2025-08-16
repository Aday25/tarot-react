import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 👈 añadimos useNavigate
import { fetchCardById } from '../services';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CardsDetail.css';
import './TarotReading.css';

export default function CardsDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate(); // 👈 ahora sí funciona

  useEffect(() => {
    async function getCard() {
      const data = await fetchCardById(id);
      setCard(data);
    }
    getCard();
  }, [id]);

  if (!card) return <p>Loading...</p>;

  return (
    <div className="cards-detail-page">
      <Navbar />
      <main className="cards-detail-content">
        <div className="card-detail-container">
          <section className="arcane-section">
            <h1 className="arcane-title">{card.arcaneName}</h1>
            <div className="arcane-row">
              <img
                src={card.arcaneImage?.imageSrc}
                alt={card.arcaneName}
                className="arcane-image"
              />
              <p className="arcane-description">{card.arcaneDescription}</p>
            </div>
          </section>

          <section className="goddess-section">
            <h2 className="goddess-title">
              Diosa asociada: {card.goddessName}
            </h2>
            <div className="goddess-row">
              <img
                src={card.goddessImage?.imageSrc}
                alt={card.goddessName}
                className="goddess-image"
              />
              <p className="goddess-description">{card.goddessDescription}</p>
            </div>
          </section>

          <div className="reading-buttons">
            <button className="other-button"
              onClick={() => navigate('/')}
            >
              Otro Arcano
            </button>
            <button className="other-button"
              onClick={() => {
                localStorage.removeItem('selectedCards');
                navigate('/tarot-reading');
              }}
            >
              Lectura de Tarot
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
