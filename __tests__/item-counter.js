import domContainer from '../mock/main-page.js';
import setNumNews from '../src/assets/js/setNews.js';

describe('Item Counter Test', () => {
  test('Check if updated infromation is added', () => {
    domContainer();
    const num = setNumNews(9);
    expect(num).toBe(9);
  });
});