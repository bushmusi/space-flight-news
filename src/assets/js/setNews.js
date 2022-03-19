const setNumNews = (num) => {
  const newsCounter = document.getElementById('news-counter');
  newsCounter.innerText = num;
  console.log(newsCounter.innerText);
  let number = newsCounter.innerText;
  number = +number;
  return number;
};

export default setNumNews;