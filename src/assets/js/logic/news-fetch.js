import { ARTICLE_URL } from '../common-var.js';

export default class {
  constructor() {
    this.url = ARTICLE_URL;
  }

    getArticles = async () => {
      const result = await fetch(this.url).then((response) => response.json())
        .catch((err) => new Error(err));
      return result;
    }
}