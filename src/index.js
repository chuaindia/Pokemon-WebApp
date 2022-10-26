/* eslint-disable linebreak-style */
import './style.css';
import { pokeCall } from './apiCall.js';
import { toggle } from './comments.js';
import Pokeball from './pokeball.png';
import Heart from './heart.png';

const logoWrapper = document.getElementById('logo');
logoWrapper.src = `${Pokeball}`;

// Get likes
const fetchLikes = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  const currentLikeIcon = document.getElementById(id.replace('item', 'like'));
  // eslint-disable-next-line camelcase
  const likeCurrentCounter = data.find(({ item_id }) => item_id === id);
  currentLikeIcon.parentNode.children[1].innerText = `(${likeCurrentCounter.likes})`;
  return data;
};

async function postLikes(id) {
  const body = JSON.stringify({ item_id: id });
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
  const data = await JSON.parse(JSON.stringify(response));
  fetchLikes(id);
  return data;
}

class Pokedex {
  constructor() {
    this.pokeList = [];
  }

  // Display Pokedex
  // eslint-disable-next-line class-methods-use-this
  displayPokedex(pokemon) {
    const wrapper = document.getElementById('wrapper');
    wrapper.style.display = 'flex';
    const pokeContainer = document.createElement('div');
    pokeContainer.classList.add('pokeContainer', `${pokemon.name}`);
    const nameTest = document.createElement('p');
    nameTest.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeFoto = document.createElement('img');
    pokeFoto.classList.add('pokeFoto');
    pokeFoto.src = `${pokemon.sprites.front_default}`;
    const commentBttn = document.createElement('button');
    commentBttn.onclick = () => toggle(pokemon.id);
    const reserveBttn = document.createElement('button');
    commentBttn.id = `commentBttn${pokemon.id}`;
    commentBttn.innerText = 'comment';
    commentBttn.classList.add('btn', 'primary');
    reserveBttn.id = `reserveBttn${pokemon.id}`;
    reserveBttn.innerText = 'adopt';
    reserveBttn.classList.add('btn', 'secondary');
    const buttonsContainer = document.createElement('section');
    buttonsContainer.classList.add('buttonsContainer');
    const likesContainer = document.createElement('section');
    const likeIcon = document.createElement('img');
    const likesCounter = document.createElement('span');
    likesContainer.classList.add('likesContainer');
    likeIcon.src = `${Heart}`;
    likeIcon.classList.add('likeIcon');
    likeIcon.onclick = (e) => {
      postLikes(e.path[0].id.replace('like', 'item'));
    };
    likeIcon.id = `like${pokemon.id}`;
    likesContainer.appendChild(likeIcon);
    likesContainer.appendChild(likesCounter);
    pokeContainer.appendChild(pokeFoto);
    pokeContainer.appendChild(likesContainer);
    pokeContainer.appendChild(nameTest);
    buttonsContainer.appendChild(reserveBttn);
    buttonsContainer.appendChild(commentBttn);
    pokeContainer.appendChild(buttonsContainer);
    wrapper.appendChild(pokeContainer);
  }

  // Gets pokemon info from API
  async getPokemon(e) {
    pokeCall(e).then((poke) => {
      this.displayPokedex(poke);
    });
  }
}

// Initialize Pokedex
const examplePokeArr = [
  'pikachu',
  'mewtwo',
  'mew',
  'ninetales',
  'charizard',
  'gengar',
  'lugia',
  'cresselia',
  'arceus',
  'dialga',
];

const myPokedex = new Pokedex();

for (let i = 0; i < examplePokeArr.length; i += 1) {
  myPokedex.getPokemon(examplePokeArr[i]);
}

// Initialize like counters
const initLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/likes';
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    const currentLikeInitID = data[i].item_id;
    const currentLikeInitCounter = document.getElementById(
      currentLikeInitID.replace('item', 'like'),
    );
    if (currentLikeInitCounter) {
      currentLikeInitCounter.parentElement.children[1].innerText = `(${data[i].likes})`;
    }
  }
  return data;
};

initLikes();

export { Pokedex, myPokedex, examplePokeArr };
