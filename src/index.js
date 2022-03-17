import './style.css';
import './style.scss';
import './assets/scss/main-tag.scss';

import News from './assets/js/logic/news-fetch.js';
import display from './assets/js/dom-service/display-news.js';
import modal from './assets/js/dom-service/display-comment.js';

const newsService = new News();
const data = newsService.getArticles();
let getIndex;

const getAllNews = async () => {
  const data = await newsService.getArticles();
  display(data);
};

getAllNews();

const getComment = async (g) => {
  const result = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${g}`).then((response) => response.json())
    .catch((err) => new Error(err));
  // console.log(result);
  return result;
};

document.addEventListener('click', async (e) => {
  e.preventDefault();
  const targetd = e.target.classList.contains('comment-span');
  if (targetd) {
    const commen = document.getElementsByClassName('comment-span');
    getIndex = commen[0].getAttribute('id');
    const ag = Number(getIndex);
    const gg = await getComment(ag);
    console.log(gg);
    modal(gg);
  }
});
