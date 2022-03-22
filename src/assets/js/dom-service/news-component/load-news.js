import getItemBox from './item-box.js';
import getItemChild from './item-nodes.js';
import getIcons from './item-icons.js';
import getDivs from './item-divs.js';
import normaliseComment from '../../logic/word-normalise.js';

const MAIN_CONT = document.querySelector('main');

const loadNews = (newsData, likesData) => {
  MAIN_CONT.innerHTML = '';

  newsData.forEach((item) => {
    const [img, titleElement, descElement, interactionCont, reserveBtn] = getItemChild();
    const itemBox = getItemBox();
    const [imgBox, descBox] = getDivs();
    img.src = item.imageUrl;
    imgBox.appendChild(img);
    titleElement.textContent = item.title;
    descElement.textContent = normaliseComment(item.summary);
    descBox.appendChild(descElement);
    const [commentSpan, likeSpan] = getIcons();
    commentSpan.id = item.id;
    likeSpan.id = `like-icon-${item.id}`;
    [commentSpan, likeSpan].forEach((element) => {
      interactionCont.appendChild(element);
    });

    const itemElements = [imgBox, titleElement, descBox, interactionCont, reserveBtn];
    itemElements.forEach((val) => {
      itemBox.appendChild(val);
    });
    MAIN_CONT.appendChild(itemBox);
  });

  if (likesData.length > 0) {
    likesData.forEach((val) => {
      const item = document.getElementById(`like-icon-${val.item_id}`);
      const temp = item ? item.innerHTML = ` ${val.likes}` : '';
    });
  }
};

export default loadNews;