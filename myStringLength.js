const myStringLength = (string) => {
  let count = 0;
  if (string.length >= 1 && string.length <= 10) {
   count = string.length 
  } else {
      return new Error('string error')
  }
  return count;
};

module.exports = myStringLength;
