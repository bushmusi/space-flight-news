import { BASE_URL, appId } from '../common-var';

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