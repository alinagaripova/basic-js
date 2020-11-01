const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof(members) != "object" || members == null) {
    return false
  } else {
    let dreamTeamName = [];
    const arr = Array.from(members)
    arr.forEach(function(item){
      if (/[a-zA-Z]/.test(item) && typeof(item) == 'string') {
        dreamTeamName.push(item.trim().charAt(0).toUpperCase())
      }
      else {
        return false
      }
    });
    return dreamTeamName.sort().join('');
  }
};
