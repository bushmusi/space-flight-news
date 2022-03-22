import loadNews from './news-component/load-news.js';

const displayItem = async (newsData, likesData) => {
  loadNews(newsData, likesData);
};

export default displayItem;