const commentPage = () => {
  document.body.innerHTML = `
    <div id="commment-box" style="width: 80%; margin: auto;"><h2>Comments (<i id="comment-counter">4</i>)</h2><div>
      <p> 2022-03-18 <strong>david</strong>:<i>cool</i></p>
      <hr>
      <br>
      <p> 2022-03-18 <strong>bushra</strong>:<i>good</i></p>
      <hr>
      <br>
      <p> 2022-03-18 <strong>Sam</strong>:<i>Big rocket</i></p>
      <hr>
      <br>
      <p> 2022-03-18 <strong>Adwoa</strong>:<i>long enough</i></p>
      <hr>
      <br></div></div>
    `;
};

export default commentPage;