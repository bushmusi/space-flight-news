const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = '4hAiwRDAyz2SaKqGrhTt';

const getCommentsData = async (newsId) => {
  let result = await fetch(`${BASE_URL}${appId}/comments?item_id=${newsId}`);
  result = await result.json();
  return result;
};

const addComment = async (newsId, title, comments) => {
  await fetch(`${BASE_URL}${appId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newsId,
      username: title,
      comment: comments,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { getCommentsData, addComment };
