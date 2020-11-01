const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != "string") {
    return false
  } else if (!/^[\d]+\.?[\d]*$/.test(sampleActivity)) {
    return false
  } else {
    let t = Math.log(15/sampleActivity) / 0.00122;
    if (t < 1 || t == Infinity) {
      return false
    } else {
      return t
    }
  }
};
