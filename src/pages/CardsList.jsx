import React, { useState, useEffect } from 'react';
import { fetchAllCards } from '../services';
import Card from '../components/Card';

export default function CardsList() {
  // Estado para guardar las cartas que nos devuelve la API
  const [cards, setCards] = useState([]);

  // useEffect para hacer la llamada a la API solo una vez al montar el componente
  useEffect(() => {
    async function getCards() {
      const data = await fetchAllCards();  // llamada a la función del servicio
      setCards(data); // guardamos las cartas en el estado
    }
    getCards();
  }, []); // array vacío para que se ejecute solo una vez

  return (
    <div>
      <h1>Cartas de Tarot</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {cards.map(card => (
          // Aquí usamos el componente Card para cada carta
          <Card key={card.id} card={card} faceDown={true} />
        ))}
      </div>
    </div>
  );
}