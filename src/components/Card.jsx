import React, { useState } from 'react';
import './Card.css';

export default function Card({ card, onClick, className = '', style = {}, faceDown = false }) {
  // Si la carta empieza boca abajo, el estado inicial es flipped = true
  const [flipped, setFlipped] = useState(faceDown);

  const handleClick = () => {
    if (flipped) {
      setFlipped(false);
      setTimeout(() => {
        if (onClick) onClick(card.id);
      }, 2100); // espera a que termine la animación
    }
  };

  return (
    <div
      className={`card ${flipped ? 'flipped' : ''} ${className}`}
      style={style}
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
