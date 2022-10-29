const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'scLRTVqWFoqoog0Hjt1E';

export const getLikes = async () => {
  const response = await fetch(`${invoUrl}${appId}/likes/`);
  const data = await response.json();
  return data;
};

export const addLike = async (name) => {
  const response = await fetch(`${invoUrl}${appId}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
  await response.json();
};

