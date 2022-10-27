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



const displayPokemon = (pokemon) => {
  const pokeContainer = document.createElement('div');
  pokeContainer.className = 'pokeContainer';
  pokeContainer.innerHTML = `<img src="${pokemon.sprites.front_shiny}" alt="pokeImage" class="pokeImage">
  <div class="pokeAssets">
    <h2 class="pokeName">${pokemon.name}</h2>
    <div class="like">
      <img src="${likeIcon}" alt="likeIcon" class="likeIcon">
      <span class="likeCount"></span>
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

const getLikes = async () => {
  const response = await fetch(`${invoUrl}${appId}/likes/`);
  const data = await response.json();
  return data;
}

const likeFields = document.querySelectorAll(".likeCount");
console.log(likeFields);
const displayLikes = (likes) => {
  
  likeFields.forEach((field) => {
    let name = field.parentElement.previousElementSibling.innerHTML;
    console.log(name);
    let likeArr = likes.filter((el)=>{el["item_id"] == name}) || [];
    let numberOfLikes = likeArr[0]["likes"] || 0;
    field.innerHTML = `${numberOfLikes}`;
  })
}

const likes = await getLikes();
console.log(likes)
displayLikes(likes);
