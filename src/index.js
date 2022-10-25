import './style.css';
import pokelogo from './pokelogo.png';

const logo = document.querySelector('.logo');
logo.innerHTML = `<img src="${pokelogo}" alt="pokemon-logo">`