module.exports = function (a, b) {
  if (a < b) {
      return -1;
  }
  if (a > b) {
      return 1;
  }
  // a must be equal to b
  return 0;
}