import React, { useEffect, useState } from 'react';
// Hook para leer el parámetro dinámico id de la URL
import { useParams } from 'react-router-dom';
// Función para traer una carta por id desde la API
import { fetchCardById } from '../services';

export default function CardDetail() {
    const { id } = useParams(); // Sacamos el id de la URL
    const [card, setCard] = useState(null); // Estado para la carta

    // useEffect para traer la carta al cargar este componente o cambiar id
    useEffect(() => {
        async function getCard() {
            console.log('ID recibido en CardDetail:', id);
            const data = await fetchCardById(id);
            setCard(data);
        }
        getCard();
    }, [id]); // Se vuelve a ejecutar si cambia id

    // Mientras no tengamos la carta, mostramos un loading
    if (!card) return <p>Loading...</p>;

    // Mostramos toda la info de la carta, incluida la diosa asociada
    return (
        <div>
            <h1>{card.arcaneName}</h1>
            <img
                src={card.arcaneImage.imageSrc}
                alt={card.arcaneName}
                style={{ maxWidth: '300px' }}
            />
            <p>{card.arcaneDescription}</p>

            <h2>Diosa asociada: {card.goddessName}</h2>
            <img
                src={card.goddessImage.imageSrc}
                alt={card.goddessName}
                style={{ maxWidth: '200px' }}
            />
            <p>{card.goddessDescription}</p>
        </div>
    );
}
