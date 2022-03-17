const MAIN_CONT = document.querySelector('main');

const getItemBox = () => {
  const itemBox = document.createElement('div');
  itemBox.className = 'item-box';
  return itemBox;
};

const getItemChild = () => {
  const img = document.createElement('img');

  const titleElement = document.createElement('strong');

  const descElement = document.createElement('p');

  const interactionCont = document.createElement('div');
  interactionCont.className = 'interact-icon';

  const reserveBtn = document.createElement('button');
  reserveBtn.className = 'reserve-btn';
  reserveBtn.textContent = 'Reservation';

  return [img, titleElement, descElement, interactionCont, reserveBtn];
};

const getIcons = () => {
  const commentSpan = document.createElement('span');
  commentSpan.innerHTML = 'comment <i class="fa fa-comment"></i>';
  const likeSpan = document.createElement('span');
  likeSpan.innerHTML = 'like <i class="fa fa-heart"></i>';

  return [commentSpan, likeSpan];
};

const displayItem = async (data) => {
  MAIN_CONT.innerHTML = '';

  data.forEach((item) => {
    const [img, titleElement, descElement, interactionCont, reserveBtn] = getItemChild();
    const itemBox = getItemBox();
    img.src = item.imageUrl;
    titleElement.textContent = item.title;
    descElement.textContent = item.summary;
    const [commentSpan, likeSpan] = getIcons();

    [commentSpan, likeSpan].forEach((element) => interactionCont.appendChild(element));

    const itemElements = [img, titleElement, descElement, interactionCont, reserveBtn];
    itemElements.forEach((val) => {
      itemBox.appendChild(val);
    });
    MAIN_CONT.appendChild(itemBox);
  });
};

export default displayItem;