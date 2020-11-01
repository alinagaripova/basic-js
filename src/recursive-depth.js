const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 0;
    for (let el of arr)
    {
      let temp = this.calculateDepth(el);
      if (max < temp) max = temp;
    }
    return 1 + max;
  }
};