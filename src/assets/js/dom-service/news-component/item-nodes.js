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
export default getItemChild;