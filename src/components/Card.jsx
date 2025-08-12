import React from 'react';

export default function Card({ card, faceDown }) {
  // Si faceDown es true, mostramos la carta boca abajo (por ejemplo, con una imagen genérica o un diseño)
  // Si no, mostramos la imagen y nombre de la carta

  const cardStyle = {
    width: '120px',
    height: '180px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  };

  return (
    <div style={cardStyle}>
      {faceDown ? (
        // Carta boca abajo: solo mostramos texto o imagen genérica
        <span>🂠</span> // símbolo para carta boca abajo
      ) : (
        // Carta boca arriba: mostramos la imagen y nombre
        <div>
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <p>{card.arcaneName}</p>
        </div>
      )}
    </div>
  );
}
