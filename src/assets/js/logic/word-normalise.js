const normaliseComment = (content) => {
  const numArray = content.split(' ');
  return numArray.length > 30 ? numArray.splice(0, 27).join(' ') : numArray.join(' ');
};

export default normaliseComment;