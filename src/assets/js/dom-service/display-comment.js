import { getCommentsData, addComment } from '../logic/add-comment.js';

const body = document.querySelector('body');
const popUp = document.createElement('section');
popUp.classList.add('modal');
const close = document.createElement('i');
close.classList.add('fa', 'fa-times', 'fa-2x');
close.style.cursor = 'pointer';
popUp.appendChild(close);

const showComment = () => {
  const commentFormTitle = document.createElement('h2');
  commentFormTitle.textContent = 'Add Comment';
  const inputName = document.createElement('input');
  const inputComment = document.createElement('textarea');
  const submit = document.createElement('button');
  inputName.type = 'text';
  inputName.id = 'username';
  inputName.placeholder = 'Name here...';
  inputComment.id = 'comment-input';
  inputComment.cols = 14;
  inputComment.rows = 14;
  inputComment.placeholder = 'Comment here...';
  submit.type = 'button';
  submit.textContent = 'Comment';
  return [commentFormTitle, inputName, inputComment, submit];
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
  popUp.style.width = '70vw';
  popUp.style.overflowY = 'scroll';
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
  publishedElement.innerHTML += `<i>Published at:</i> ${data.publishedAt}`;
  updatedElement.innerHTML += `<i>Updated at:</i> ${data.updatedAt}`;
  titleElement.textContent = data.title;

  const [formTitle, inputName, inputComment, submit] = showComment();

  const form = document.createElement('form');
  form.id = 'comment-form';
  const formEl = [formTitle, inputName, inputComment, submit];

  formEl.forEach((item) => {
    form.appendChild(item);
  });

  const containComment = document.createElement('div');
  const commentTitle = document.createElement('h2');
  const commentDetails = document.createElement('div');
  containComment.style.width = '80%';
  containComment.style.margin = 'auto';
  containComment.id = 'commment-box';
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
    // addComment(data.id, inputName.value, inputComment.value);
    const commentCont = document.getElementById('commment-box');
    const commentForm = document.getElementById('comment-form');
    const commentCounter = document.getElementById('comment-counter');
    let count = commentCounter === null ? 0 : commentCounter.textContent;
    count = +count;
    count = typeof commentCounter === 'number' ? count : 0;
    count += 1;
    commentTitle.innerHTML = `Comments (<i id='comment-counter'>${count}</i>)`;
    commentCont.innerHTML += `
      <p> Now <strong>${inputName.value}</strong>:<i>${inputComment.value}</i></p>
      <hr>
      <br>`;
    commentForm.reset();
  });

  const commentInfo = await getCommentsData(data.id);
  if (commentInfo.length > 0) {
    commentTitle.innerHTML = `Comments (<i id='comment-counter'>${commentInfo.length}</i>)`;
    commentInfo.forEach((item) => {
      commentDetails.innerHTML += `
      <p> ${item.creation_date} <strong>${item.username}</strong>:<i>${item.comment}</i></p>
      <hr>
      <br>`;
    });
  }
};

export default displayModal;
