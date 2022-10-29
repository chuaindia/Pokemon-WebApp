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

const getComments = async (item) => {
  const response = await fetch(`${invoUrl}${appId}/comments?item_id=${item}`);
  const data = await response.json().catch((error) => [error]);
  return data;
};

const addComment = async (name, user, com) => {
  const response = await fetch(`${invoUrl}${appId}/comments/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: name,
      username: user,
      comment: com,
    }),
  });
  await response.json();
};

const addLike = async (name) => {
  const response = await fetch(`${invoUrl}${appId}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
  await response.json();
};

let likes = await getLikes();

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
      <h3 class="commentsTitle">Comments<span class="comments-number"></span></h3>
        <div class="actual-comments">
        </div>
      </div>
      <div class="add-comment">
        <h3 class="add-title">Add a comment</h3>
        <form action="#">
          <input type="text" id="name" name="name" placeholder="Your name">
          <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insights"></textarea>
          <button class="submit" type="submit">Comment</button>
        </form>
      </div>`;

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
    const commentsField = document.querySelector('.actual-comments');
    const name = document.querySelector('#name');
    const comment = document.querySelector('#comment');
    const form = document.querySelector('form');
    const commentsCount = () => {
      const alComments = commentsField.childElementCount;
      return alComments;
    };
    const displayNumberComments = async () => {
      const number = commentsCount();
      const comments = document.querySelector('.comments-number');
      comments.innerHTML = `(${number})`;
    };

    const displayComments = async () => {
      commentsField.innerHTML = '';
      let comments = [];
      comments = await getComments(pokemon.name) || [];
      if (comments.length !== 0) {
        comments.forEach((comment) => {
          const commentContainer = document.createElement('p');
          commentContainer.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
          commentsField.appendChild(commentContainer);
        });
      }
      displayNumberComments();
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      addComment(pokemon.name, name.value, comment.value);
      document.querySelector('#comment').value = '';
      document.querySelector('#name').value = '';
      setTimeout(displayComments, 2000);
    });

    displayComments();
  });

  const poke = document.querySelector(`#pokemon${pokemon.id}`);
  const field = poke.nextElementSibling.children[1];
  const like = poke.nextElementSibling.children[0];

  const displayLikes = async () => {
    likes = await getLikes();
    const name = poke.innerHTML;
    const likeArr = likes.filter((el) => el.item_id === name) || [];
    let numberOfLikes = 0;
    if (likeArr.length !== 0) {
      numberOfLikes = likeArr[0].likes;
    }

    field.innerHTML = `${numberOfLikes}`;
  };

  like.addEventListener('click', async () => {
    addLike(pokemon.name);
    field.innerHTML = parseInt(field.innerHTML, 10) + 1;
  });

  displayLikes();
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

const countItems = async () => {
  const numberOfItems = document.querySelectorAll('.pokeContainer').length;
  const items = document.querySelector('.all-items');
  items.innerHTML = `(${numberOfItems})`;
};

setTimeout(countItems, 3000);
