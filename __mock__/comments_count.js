const commentsCount = (container) => {
  const alComments = container.querySelector('.actual-comments').childElementCount;
  return alComments;
};

export default commentsCount;