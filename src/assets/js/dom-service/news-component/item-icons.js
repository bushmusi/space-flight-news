const getIcons = () => {
  const commentSpan = document.createElement('span');
  commentSpan.className = 'fa fa-comment comment-span';
  const likeSpan = document.createElement('span');
  likeSpan.className = 'fa fa-heart like-icon';
  return [commentSpan, likeSpan];
};

export default getIcons;