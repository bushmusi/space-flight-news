const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const initializeComments = async () => {
  const response = await fetch(`${url}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return response.json;
};

export { url, initializeComments };