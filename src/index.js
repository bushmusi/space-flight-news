import './style.css';
import './style.scss';
import './assets/scss/main-tag.scss';

import News from './assets/js/logic/news-fetch.js';
import display from './assets/js/dom-service/display-news.js';
import modal from './assets/js/dom-service/display-comment.js';
import likeCounter from './assets/js/logic/like-counter';

const newsService = new News();
const likeService = new likeCounter();

const getAllNews = async () => {
  const newsData = await newsService.getArticles();
  const likeData = await likeService.get();
  display(newsData,likeData);

  const likeElements = document.querySelectorAll('.like-icon');
  likeElements.forEach( (val) => {
    val.addEventListener('click',async (e) => {
      let id = val.id.split('-');
      const like_id = +id[2];
      likeService.like(like_id);
      const likeItem = document.getElementById(val.id);
      let counter = e.target.innerText;
      counter = +counter + 1;
      likeItem.innerHTML = counter;
    })
  })

};

getAllNews();


const getComment = async (g) => {
  const result = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${g}`).then((response) => response.json())
    .catch((err) => new Error(err));
  return result;
};

document.addEventListener('click', async (e) => {
  e.preventDefault();
  let targetd = e.target.classList.contains('comment-span');
  if (targetd) {
    const getIndex = e.target.getAttribute('id');

    const ag = Number(getIndex);
    const gg = await getComment(ag);
    modal(gg);
    document.querySelector('main').classList.toggle('dn');
  }
  targetd = !e.target.classList.contains('comment-span');
});

document.addEventListener('click', async (e) => {
  e.preventDefault();
  const targetd = e.target.classList.contains('fa-times');
  if (targetd) {
    document.querySelector('section').style.display = 'none';
    document.querySelector('main').classList.remove('dn');
  }
});
