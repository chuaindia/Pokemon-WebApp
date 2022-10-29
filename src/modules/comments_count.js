const commentsCount = () => {
  const alComments = document.querySelector('.actual-comments').childElementCount;
  return alComments;
};

export default commentsCount;