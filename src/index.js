/* eslint-disable linebreak-style */

import './style.css';
import pokelogo from './images/pokelogo.png';
import likeIcon from './images/like.png';

const logo = document.querySelector('.logo');
logo.innerHTML = `<img src="${pokelogo}" alt="pokemon-logo"> `;

const mainUrl = 'https://pokeapi.co/api/v2/';
const main = document.querySelector('main');

const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'scLRTVqWFoqoog0Hjt1E';

const getLikes = async () => {
  const response = await fetch(`${invoUrl}${appId}/likes/`);
  const data = await response.json();
  return data;
};

const addLike = async (name) => {
  const response = await fetch(`${invoUrl}${appId}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: name
    }),
  });
  const data = await response.json();
  return data;
}

const likes = await getLikes();

const displayPokemon = (pokemon) => {
  const pokeContainer = document.createElement('div');
  pokeContainer.className = 'pokeContainer';
  pokeContainer.innerHTML = `<img src="${pokemon.sprites.front_shiny}" alt="pokeImage" class="pokeImage">
  <div class="pokeAssets">
    <h2 id="pokemon${pokemon.id}"class="pokeName">${pokemon.name}</h2>
    <div class="like">
      <img src="${likeIcon}" alt="likeIcon" class="likeIcon">
      <span class="likeCount"></span>
    </div>
  </div>
  <button class="comment btn">Comments</button>
  <button class="reservation btn">Reservations</button>`;

  main.appendChild(pokeContainer);

  const poke = document.querySelector(`#pokemon${pokemon.id}`);
  const field = poke.nextElementSibling.children[1];
  const name = poke.innerHTML;
  const likeArr = likes.filter((el) => el.item_id === name) || [];
  let numberOfLikes = 0;
  if (likeArr.length !== 0) {
    numberOfLikes = likeArr[0].likes;
  }

  field.innerHTML = `${numberOfLikes}`;
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
