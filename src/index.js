import './style.css';
import './style.scss';
import './assets/scss/main-tag.scss';

import News from './assets/js/logic/news-fetch.js';
import display from './assets/js/dom-service/display-news.js';

const news_service = new News();
const data = news_service.getArticles();

const getAllNews = async () => {
    let data = await news_service.getArticles();
    display(data)
}

getAllNews();