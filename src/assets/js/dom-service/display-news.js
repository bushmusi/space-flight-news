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
  commentSpan.className = 'fa fa-comment comment-span';
  const likeSpan = document.createElement('span');
  likeSpan.className = 'fa fa-heart like-icon';
  return [commentSpan, likeSpan];
};

const displayItem = async (newsData, likesData) => {
  MAIN_CONT.innerHTML = '';

  newsData.forEach((item) => {
    const [img, titleElement, descElement, interactionCont, reserveBtn] = getItemChild();
    const itemBox = getItemBox();
    img.src = item.imageUrl;
    titleElement.textContent = item.title;
    descElement.textContent = item.summary;
    const [commentSpan, likeSpan] = getIcons();
    commentSpan.id = item.id;
    likeSpan.id = `like-icon-${item.id}`;
    [commentSpan, likeSpan].forEach((element) => {
      interactionCont.appendChild(element);
    });

    const itemElements = [img, titleElement, descElement, interactionCont, reserveBtn];
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

export default displayItem;