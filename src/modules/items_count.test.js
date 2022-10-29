/**
 * @jest-environment jsdom
 */

import countItems from '../../__mock__/items_count.js';

test('Test on items count', () => {
  const container = document.createElement('div');
  container.innerHTML = `<div class="pokeContainer"></div>
  <div class="pokeContainer"></div>
  <div class="pokeContainer"></div>
  <div class="pokeContainer"></div>
  <div class="pokeContainer"></div>`;

  expect(countItems(container)).toBe(5);
});