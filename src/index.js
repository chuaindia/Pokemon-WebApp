/* eslint-disable linebreak-style */
import './style.css';
import pokelogo from './images/pokelogo.png';

const logo = document.querySelector('.logo');
logo.innerHTML = `<img src="${pokelogo}" alt="pokemon-logo"> `;

const mainUrl = 'https://pokeapi.co/api/v2/';
const main = document.querySelector('main');

const getPokemons = async () => {
  const resp = await fetch(`${mainUrl}pokemon?limit=30`);
  const pokemons = await resp.json();
  pokemons.results.forEach(pokemon => {
    fetchPokemon(pokemon);
  });
  
}

const fetchPokemon = async (pokemon) => {
  let pokeurl = pokemon.url;
  const response = await fetch(pokeurl);
  const pokeData = await response.json();
  return pokeData;
}

const displayPokemon = (pokemon) => {
  const pokeContainer = document.createElement('div');
  pokeContainer.className = 'pokeContainer';
  pokeContainer.innerHTML = `<img src="" alt="pokeImage" class="pokeImage">
  <div class="pokeAssets">
    <h2 class="pokeName">NAme</h2>
    <div class="like">
      <img src="" alt="likeIcon" class="likeIcon">
      <span class="likeCount">9</span>
    </div>
  </div>
  <button class="comment">Comments</button>
  <button class="reservation">Reservations</button>`;

  main.appendChild(pokeContainer);
}