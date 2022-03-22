const getDivs = () => {
  const imgBox = document.createElement('div');
  imgBox.className = 'item-image';
  const descBox = document.createElement('div');
  descBox.className = 'desc-box';
  return [imgBox, descBox];
};

export default getDivs;