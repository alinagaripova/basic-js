const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error') 
  }
  let result = date;
  if (date.getMonth() < 2 || date.getMonth() >= 11){
    result = 'winter';
  } else if (date.getMonth() < 5 ) {
    result = 'spring';
  } else if (date.getMonth() < 8 ) {
    result = 'summer';
  } else if (date.getMonth() < 11 ) {
    result = 'autumn';
  }
  return result
};
