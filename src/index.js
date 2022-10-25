/* eslint-disable linebreak-style */
import './style.css';
import pokelogo from './images/pokelogo.png';

const logo = document.querySelector('.logo');
logo.innerHTML = `<img src="${pokelogo}" alt="pokemon-logo"> `;

const mainUrl = 'https://pokeapi.co/api/v2/';

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
  
}