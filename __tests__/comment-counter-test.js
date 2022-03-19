import commentPage from '../mock/comment-container.js';
import addComment from '../src/assets/js/comment-counter-init.js';

describe('Comments Counter Test', () => {
  test('Check if we are getting number of comments', () => {
    commentPage();
    const res = addComment();
    expect(res).not.toBe(null);
  });
});