import { commentsCount } from "./comments_count";
const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'scLRTVqWFoqoog0Hjt1E';

export const getComments = async (item) => {
  const response = await fetch(`${invoUrl}${appId}/comments?item_id=${item}`);
  const data = await response.json();
  if (response.status === 400) {
    return [];
  } else {
    return data;
  }
};

export const addComment = async (name, user, com) => {
  const response = await fetch(`${invoUrl}${appId}/comments/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: name,
      username: user,
      comment: com,
    }),
  });
  await response.json();
};


const displayNumberComments = async () => {
  const number = commentsCount();
  const comments = document.querySelector('.comments-number');
  comments.innerHTML = `(${number})`;
}

export const displayComments = async (id) => {
  const commentsField = document.querySelector('.actual-comments');
  commentsField.innerHTML = '';
  let comments = [];
  comments = await getComments(id) || [];
  if (comments.length !== 0) {
    comments.forEach((comment) => {
      const commentContainer = document.createElement('p');
      commentContainer.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      commentsField.appendChild(commentContainer);
    });
  }
  displayNumberComments();
};
