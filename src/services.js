export async function fetchAllCards() {
  const response = await fetch('https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot');
  if (!response.ok) {
    throw new Error('Error al obtener las cartas');
  }
  const data = await response.json();
  return data;
}