const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const initializeGame = async (gameName) => {
  const response = await fetch(`${url}/`, {
    method: 'POST',
    body: JSON.stringify({ name: gameName }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export { url, initializeGame };