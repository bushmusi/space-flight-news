const body = document.querySelector('body');
const popUp = document.createElement('section');
popUp.classList.add('modal');
const getModal = document.querySelector('.modal');
const modalHeader = document.createElement('div');
modalHeader.classList.add('modal-header');
popUp.appendChild(modalHeader);

const popComment = () => {
  const imgElemet = document.createElement('img');

  const titleElement = document.createElement('strong');

  const descElement = document.createElement('a');

  const newsSiteElement = document.createElement('a');

  const summaryElement = document.createElement('p');

  const publishedElement = document.createElement('p');

  const updatedElement = document.createElement('p');

  // eslint-disable-next-line max-len
  return [imgElemet, titleElement, descElement, newsSiteElement, summaryElement, publishedElement, updatedElement];
};

const displayModal = async (data) => {
  popUp.style.display = 'block';
  body.appendChild(popUp);
  console.log(data);
  // eslint-disable-next-line max-len
  const [imgElemet, titleElement, descElement, newsSiteElement, summaryElement, publishedElement, updatedElement] = popComment();
  imgElemet.src = data.imageUrl;
  descElement.href = data.url;
  descElement.textContent = 'Visit website';
  newsSiteElement.href = data.newsSite;
  summaryElement.textContent = data.summary;
  publishedElement.textContent = data.publishedAt;
  updatedElement.textContent = data.updatedAt;
  titleElement.textContent = data.title;
  descElement.textContent = data.summary;

  // eslint-disable-next-line max-len
  const itemElements = [imgElemet, titleElement, descElement, newsSiteElement, summaryElement, publishedElement, updatedElement];
  itemElements.forEach((val) => {
    modalHeader.appendChild(val);
  });
};

export default displayModal;
