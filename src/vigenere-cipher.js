const { resetHistory } = require("sinon");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct)
  {
    if (arguments.length === 0 || direct) this.direct = true;
    else this.direct = false;
  }
  
  encrypt(message, key) {
    if (arguments.length < 2) throw new Error('No message and/or key!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let encryptedMessage = '';
    let iter = 0;
    for (let el of message)
    {
      if (/[A-Z]/.test(el))
      {
        let diff = key.charCodeAt(iter % key.length) - 'A'.charCodeAt(0);
        let nextCode = el.charCodeAt(0) + diff;
        if (nextCode > 'Z'.charCodeAt(0)) nextCode -= 26;
        encryptedMessage += String.fromCharCode(nextCode);
        iter++;
      }
      else
      {
        encryptedMessage += el;
      }
    }
    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) throw new Error('No message and/or key!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    
    let message = '';
    let iter = 0;
    for (let el of encryptedMessage)
    {
      if (/[A-Z]/.test(el))
      {
        let diff = key.charCodeAt(iter % key.length) - 'A'.charCodeAt(0);
        let nextCode = el.charCodeAt(0) - diff;
        if (nextCode < 'A'.charCodeAt(0)) nextCode += 26;
        message += String.fromCharCode(nextCode);
        iter++;
      }
      else
      {
        message += el;
      }
    }
    return this.direct ? message : message.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;