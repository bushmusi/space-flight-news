const addComment = () => {
  const commentCont = document.getElementById('commment-box');
  const commentCounter = document.getElementById('comment-counter');
  const commentTitle = document.createElement('h2');
  let count = commentCounter.textContent;
  count = +count;
  count += 1;
  commentTitle.innerHTML = 'Comments (<i id=\'comment-counter\'>9</i>)';
  commentCont.appendChild(commentTitle);
  commentCont.innerHTML += `
      <p> Now <strong>Jon</strong>:<i>Hello World</i></p>
      <hr>
      <br>`;
  return commentCont;
};

export default addComment;