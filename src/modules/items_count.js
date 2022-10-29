const countItems = () => {
  const numberOfItems = document.querySelector('main').childElementCount;
  return numberOfItems;
};

export default countItems;