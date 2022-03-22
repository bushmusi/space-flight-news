import { BASE_URL, appId } from '../common-var.js';

export default class {
  constructor() {
    this.url = `${BASE_URL}/${appId}/likes`;
  }

    get = async () => {
      const result = await fetch(this.url).then((res) => res.json())
        .catch((err) => new Error(err));
      return result;
    }

    like = async (id = null) => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4hAiwRDAyz2SaKqGrhTt/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
        }),
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    }
}