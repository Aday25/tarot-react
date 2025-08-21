// URL base de la API de tarot, la que nos han dado
const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

// Función para traer todas las cartas (GET /tarot)
export async function fetchAllCards() {
  const res = await fetch(API_URL, {
    method: 'GET', 
  });
  if (!res.ok) throw new Error('Failed to fetch cards'); // Manejo básico de errores
  return res.json(); // Devuelve el array de cartas en formato JSON
}

// Función para traer los datos de una carta concreta por su id (GET /tarot/:id)
export async function fetchCardById(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET', 
  });
  if (!res.ok) throw new Error('Failed to fetch card by id');
  return res.json(); // Devuelve el objeto carta en JSON
}
