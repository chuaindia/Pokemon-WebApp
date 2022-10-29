export const countItems = (document) => {
  const numberOfItems = document.querySelectorAll('.pokeContainer').length;
  return numberOfItems;
};