import './style.css';
import './style.scss';
import './assets/scss/main-tag.scss';

import News from './assets/js/logic/news-fetch.js';
import display from './assets/js/dom-service/display-news.js';
import modal from './assets/js/dom-service/display-comment.js';
import { initializeComments } from './assets/js/logic/initializeComment.js';

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
  let targetd = e.target.classList.contains('comment-span');
  if (targetd) {
    getIndex = e.target.getAttribute('id');

    const ag = Number(getIndex);
    const gg = await getComment(ag);
    modal(gg);
    document.querySelector('main').classList.toggle('dn');
  }
  targetd = !e.target.classList.contains('comment-span');
  // const letit = await initializeComments();
  // const gup = Number(letit);
  // console.log(gup);
});

document.addEventListener('click', async (e) => {
  e.preventDefault();
  const targetd = e.target.classList.contains('fa-times');
  if (targetd) {
    document.querySelector('section').style.display = 'none';
    document.querySelector('main').classList.remove('dn');
  }
});
