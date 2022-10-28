/* eslint-disable linebreak-style */
import './style.css';
import pokelogo from './images/pokelogo.png';
import likeIcon from './images/like.png';

const logo = document.querySelector('.logo');
logo.innerHTML = `<img src="${pokelogo}" alt="pokemon-logo"> `;

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
  <button id="${pokemon.id}"class="comment btn">Comments</button>
  <button class="reservation btn">Reservations</button>`;

  main.appendChild(pokeContainer);
  const butt = document.getElementById(`${pokemon.id}`);
  butt.addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'block';
    modalContainer.innerHTML = `<div class="modal-image">
        <img src="${pokemon.sprites.front_shiny}" alt="pokemon-image" class="pokemon-image">
        <img src="${pokemon.sprites.back_shiny}" alt="pokemon-image2" class="pokemon-image">
        <span class="close"><a>&#x2715;</a></span>
      </div>
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="parameters">
        <span>Weight: ${pokemon.weight}</span>
        <span>Height: ${pokemon.height}</span>
        <span>Base experience: ${pokemon.base_experience}</span>
        <span>Type: ${pokemon.types[0].type.name}</span>
      </div>
      <div class="comments">
        <h3 class="commentsTitle">Comments</h3>
        <p>first comment</p>
        <p>second comment</p>
      </div>
      <div class="add-comment">
        <h3 class="add-title">Add a comment</h3>
        <form action="#">
          <input type="text" id="name" name="name" placeholder="Your name">
          <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insights"></textarea>
          <button type="submit">Comment</button>
        </form>
      </div>`;

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  });
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