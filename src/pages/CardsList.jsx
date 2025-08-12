import React, { useEffect, useState } from 'react';
// Hook para navegar programáticamente a otra ruta
import { useNavigate } from 'react-router-dom';
// Importamos función que llama la API para todas las cartas
import { fetchAllCards } from '../services';
// Importamos el componente Card, que muestra cada carta individual
import Card from '../components/Card';

export default function CardsList() {
  // Estado para guardar las cartas que trae la API
  const [cards, setCards] = useState([]);
  // Hook para cambiar la ruta cuando se hace click en una carta
  const navigate = useNavigate();

  // useEffect para ejecutar la llamada API solo una vez cuando el componente monta
  useEffect(() => {
    async function getCards() {
      const data = await fetchAllCards(); // Esperamos la respuesta
      setCards(data); // Guardamos las cartas en el estado para que React las renderice
    }
    getCards();
  }, []); // Array vacío para que se ejecute solo la primera vez

  // Función que llamamos al hacer click en una carta, recibe su id
  const handleCardClick = (id) => {
    // Navegamos a la ruta detalle usando el id
    navigate(`/card/${id}`);
  };

  return (
    <div>
      <h1>Cartas de Tarot</h1>
      {/* Contenedor flexible para mostrar las cartas en filas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {/* Recorremos las cartas y renderizamos un Card por cada una */}
        {cards.map((card) => (
          // Pasamos la carta y la función para manejar clicks
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}
