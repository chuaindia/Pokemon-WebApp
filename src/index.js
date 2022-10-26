/* eslint-disable linebreak-style */

import './style.css';
import pokelogo from './images/pokelogo.png';
import likeIcon from './images/like.png';

const mainUrl = 'https://pokeapi.co/api/v2/';
const main = document.querySelector('main');

const displayPokemon = (pokemon) => {
  const pokeContainer = document.createElement('div');
  pokeContainer.className = 'pokeContainer';
  pokeContainer.innerHTML = `<img src="${pokemon.sprites.front_shiny}" alt="pokeImage" class="pokeImage">
  <div class="pokeAssets">
    <h2 class="pokeName">${pokemon.name}</h2>
    <div class="like">
      <img src="${likeIcon}" alt="likeIcon" class="likeIcon">
      <span class="likeCount">9</span>
    </div>
  </div>
  <button class="comment btn">Comments</button>
  <button class="reservation btn">Reservations</button>`;

  main.appendChild(pokeContainer);
};

const fetchPokemon = async (pokemon) => {
  const pokeurl = pokemon.url;
  const response = await fetch(pokeurl);
  const pokeData = await response.json();
  displayPokemon(pokeData);
};

const getPokemons = async () => {
  const resp = await fetch(`${mainUrl}pokemon?limit=30`);
  const pokemons = await resp.json();
  pokemons.results.forEach((pokemon) => {
    fetchPokemon(pokemon);
  });
};

getPokemons();
