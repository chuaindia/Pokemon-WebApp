/* eslint-disable linebreak-style */
const pokeCall = async (e) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {
    method: 'GET',
  });
  const pokemonInfo = await response.json();
  return pokemonInfo;
};
const likeCall = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'GET',
  });
  const likeUpdate = await response.json();
  return likeUpdate;
};
const likePost = async (e) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {
    method: 'POST',
  });
  const likeUpdate = await response.json();
  return likeUpdate;
};
  // eslint-disable-next-line import/prefer-default-export
export { pokeCall, likeCall, likePost };