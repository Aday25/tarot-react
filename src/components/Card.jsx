import React, { useState } from 'react';
import './Card.css';

export default function Card({ card, onClick }) {
  // Arranca flipped = true para que la carta esté boca abajo al cargar
  const [flipped, setFlipped] = useState(true);

  const handleClick = () => {
    if (flipped) { // Si está boca abajo, la giramos para mostrar la carta
      setFlipped(false);
      // Esperamos a que termine la animación antes de navegar
      setTimeout(() => {
        if (onClick) onClick(card.id);
      }, 600);
    }
  };

  return (
    <div
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <div className="card-inner">
        <div className="card-front">
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            className="card-image"
            loading="lazy"
          />
          <p className="card-name">{card.arcaneName}</p>
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}
