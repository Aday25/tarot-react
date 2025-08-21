import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCardById } from '../services';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import './CardsDetail.css'; // reutilizamos los estilos de detalle
import './TarotReading.css';

export default function FinalReading() {
  const navigate = useNavigate();
  const [reading, setReading] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    async function getReading() {
      const results = await Promise.all(stored.map(id => fetchCardById(id)));
      setReading(results);
    }
    if (stored.length === 3) getReading();
    else navigate('/'); // Si no hay cartas seleccionadas, volvemos al inicio
  }, [navigate]);

  const positions = ['Pasado', 'Presente', 'Futuro'];

  if (reading.length !== 3) return <p>Cargando lectura...</p>;

  return (
    <div className="cards-detail-page">
      {/* Scroll al top al montar la página */}
      <ScrollToTop />

      <Navbar />

      <main className="cards-detail-content">
        <div className="reading-container">
          {reading.map((card, i) => (
            <div key={card.id} className="card-detail-container">
              <section className="arcane-section">
                <h1 className="arcane-title">{positions[i]}</h1>
                <h2 className="arcane-subtitle">{card.arcaneName}</h2>
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
                <h2 className="goddess-title">Diosa asociada: {card.goddessName}</h2>
                <div className="goddess-row">
                  <img
                    src={card.goddessImage?.imageSrc}
                    alt={card.goddessName}
                    className="goddess-image"
                  />
                  <p className="goddess-description">{card.goddessDescription}</p>
                </div>
              </section>
            </div>
          ))}

          <div className="reading-buttons">
            <button
              className="reveal-button"
              onClick={() => navigate('/tarot-reading')}
            >
              Repetir lectura
            </button>
            <button
              className="other-button"
              onClick={() => {
                localStorage.removeItem('selectedCards');
                navigate('/');
              }}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
