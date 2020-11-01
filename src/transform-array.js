const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = arr.slice()
  if (Object.prototype.toString.call(arr) != '[object Array]'){
    throw new Error('Error') 
  }
  let result = []
  arr2.forEach(function(item, index){
    switch (item) {
      case '--discard-next':
        if ((index + 1) < arr2.length) {
          arr2[index + 1] = '-';
        }
        break
      case '--discard-prev':
        if (result.length > 0 && String(arr2[index-1]) != '-'){
          result.pop();
        }
        break
      case '--double-next':
        if (arr2[index + 1] != undefined) {
          result.push(arr2[index + 1]);
        }
        break
      case '--double-prev':
        if (result.length > 0 && String(arr2[index-1]) != '-'){
          result.push(result[result.length-1]);
        }
        break
      case '-':
        break
      // case NaN:
      //   break
      default:
        result.push(item);
        break
    }
  });
  return result
};
