/**
 * @jest-environment jsdom
 */

import commentsCount from '../../__mock__/comments_count.js';

test('Test on comments count', () => {
  const container = document.createElement('div');
  const secondContainer = document.createElement('div');
  secondContainer.className = 'actual-comments';
  secondContainer.innerHTML = `<p class="pokeContainer"></p>
   <p class="pokeContainer"></p>
   <p class="pokeContainer"></p>
   <p class="pokeContainer"></p>
   <p class="pokeContainer"></p>`;
  container.appendChild(secondContainer);

  expect(commentsCount(container)).toBe(5);
});