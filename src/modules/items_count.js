export const countItems = () => {
  const numberOfItems = document.querySelector('main').childElementCount;
  return numberOfItems;
};