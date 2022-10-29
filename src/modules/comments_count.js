export const commentsCount = () => {
  const alComments = document.querySelector('.actual-comments').childElementCount;
  return alComments;
}