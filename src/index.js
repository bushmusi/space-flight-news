import './style.css';
import './style.scss';
import './assets/scss/main-tag.scss';

import News from './assets/js/logic/news-fetch.js';
import display from './assets/js/dom-service/display-news.js';

const newsService = new News();
const data = newsService.getArticles();

const getAllNews = async () => {
  const data = await newsService.getArticles();
  display(data);
};

getAllNews();