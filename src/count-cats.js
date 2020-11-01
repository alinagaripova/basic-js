const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    count += element.filter(item => item == '^^').length;
  });
  return count
};
