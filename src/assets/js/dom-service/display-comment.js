import { getCommentsData, addComment } from '../logic/addComment.js';

const body = document.querySelector('body');
const popUp = document.createElement('section');
popUp.classList.add('modal');
const close = document.createElement('i');
close.classList.add('fa', 'fa-times', 'fa-2x');
close.style.border = '1px solid black';
close.style.cursor = 'pointer';
close.style.color = 'black';
close.style.background = 'white';
popUp.appendChild(close);
const getModal = document.querySelector('.modal');

const showComment = () => {
  const inputName = document.createElement('input');
  const inputComment = document.createElement('input');
  const submit = document.createElement('button');
  inputName.type = 'text';
  inputName.id = 'username';
  inputName.placeholder = 'name';
  inputComment.type = 'text';
  inputComment.id = 'username';
  inputComment.placeholder = 'Comment';
  submit.type = 'button';
  submit.textContent = 'Comment';
  return [inputName, inputComment, submit];
};

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
  while (popUp.children.length > 1) {
    popUp.removeChild(popUp.children[1]);
  }
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  popUp.appendChild(modalHeader);
  body.appendChild(popUp);
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

  const [inputName, inputComment, submit] = showComment();

  const form = document.createElement('form');
  const formEl = [inputName, inputComment, submit];

  formEl.forEach((item) => {
    form.appendChild(item);
  });

  const containComment = document.createElement('div');
  const commentTitle = document.createElement('h2');
  const commentDetails = document.createElement('div');
  containComment.style.width = '80%';
  containComment.style.margin = 'auto';
  containComment.style.color = 'white';
  commentTitle.textContent = 'No Comments';
  containComment.appendChild(commentTitle);
  containComment.appendChild(commentDetails);

  const itemElements = [
    imgElemet,
    titleElement,
    descElement,
    newsSiteElement,
    summaryElement,
    publishedElement,
    updatedElement,
    containComment,
    form,
  ];
  itemElements.forEach((val) => {
    modalHeader.appendChild(val);
  });
  submit.addEventListener('click', async () => {
    addComment(data.id, inputName.value, inputComment.value);
    commentTitle.textContent = 'Comments';
    commentDetails.innerHTML = '';
    const commentInfo = await getCommentsData(data.id);
    commentInfo.forEach((item) => {
      commentInfo.innerHTML += `
      <p> ${item.username} : ${item.creation_date} </p>
      <p> ${item.comment} </p>
      <hr>
      <br>`;
    });
  });

  const commentInfo = await getCommentsData(data.id);
  if (commentInfo.length > 0) {
    commentTitle.textContent = 'Comments';
    commentDetails.innerHTML = '';
  }
  commentInfo.forEach((item) => {
    commentDetails.innerHTML += `
    <p> ${item.username} : ${item.creation_date} </p>
    <p> ${item.comment} </p>
    <hr>
    <br>`;
  });
};

export default displayModal;
