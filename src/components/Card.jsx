import React from 'react';
import './Card.css'; // Importamos el CSS externo para los estilos

export default function Card({ card, faceDown, onClick }) {
  // Si faceDown es true, la carta se muestra boca abajo
  // Si no, mostramos la imagen y nombre de la carta

  // Función para manejar el click (si pasas onClick)
  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleClick()}>
      {faceDown ? (
        // Carta boca abajo: mostramos un icono o símbolo genérico
        <span className="card-back">🂠</span>
      ) : (
        // Carta boca arriba: imagen y nombre
        <div className="card-front">
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            className="card-image"
            loading="lazy" // carga perezosa para optimizar
          />
          <p className="card-name">{card.arcaneName}</p>
        </div>
      )}
    </div>
  );
}
