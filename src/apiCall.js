/* eslint-disable linebreak-style */
const pokeCall = async (e) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {
    method: 'GET',
  });
  const pokemonInfo = await response.json();
  return pokemonInfo;
};

export default pokeCall;