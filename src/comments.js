/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
/* eslint-disable import/extensions */

import { pokeCall } from './apiCall.js';

// Involment POST and GET
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/comments';

const postCom = async (e) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(e),
  });
  return response.json();
};

async function getCom() {
  const response = await fetch(baseURL);
  return response.json();
}

// Display Stats
const commentWindow = document.getElementById('comment-window');

const toggleClose = () => {
  if (commentWindow.style.display === 'block') {
    commentWindow.style.display = 'none';
    commentWindow.innerHTML = '';
  }
};

const displayPokemonStats = (e) => {
  pokeCall(e).then((poke) => {
    const pokeImg = poke.sprites.front_shiny;
    const pokeTypeOne = poke.types[0].type.name;
    const pokeName = poke.name.toUpperCase();
    const pokeWeight = poke.weight;
    const pokeHeight = poke.height;
    const pokePower = poke.base_experience;

    let html = '';
    const htmlSegment = `
    <div id="stats-window">
      <div id="stats-section">
        <img src="src/cancel.png" id="close" width="48">
        <img src="${pokeImg}" id="photo" width="160">
      </div>
      <h2>${pokeName}</h2>
      <div id="type-div">
        <p id="type-tex">${pokeTypeOne}</p>
      </div>
      <p>Weight: ${pokeWeight}</p>
      <p>Height: ${pokeHeight}</p>
      <p>Power: ${pokePower}</p>
      <comments-section id="comment-section" class="comments-section">
        <h3>Best Comments</h3>
        <div class="container"></div>
        <ul class="comments-list" style="display: none;"></ul>
        <h3>Add your comment</h3>
        <form class="form-class">
          <input class="input-name" placeholder="Your name" required="">
          <textarea class="input-text" placeholder="Your comment" required=""></textarea>
          <button type="submit" class="send-comment">Send your comment</button>
        </form>
      </comments-section>
    </div>
    `;
    html += htmlSegment;
    commentWindow.innerHTML = html;

    document.getElementById('close').addEventListener('click', toggleClose);
  });
};

// Toggle: open/close each card
const toggle = (id) => {
  if (commentWindow.style.display === 'none') {
    commentWindow.style.display = 'block';
    displayPokemonStats(id);
  } else {
    commentWindow.style.display = 'none';
    commentWindow.innerHTML = '';
  }
};

export {
  postCom, getCom, displayPokemonStats, toggle,
};