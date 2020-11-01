const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let str = '( ' + String(value) + ' )';
    this.chain.push(str);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && parseInt(position) <= this.getLength() && parseInt(position) > 0)
    {
      const positionInt = parseInt(position) - 1;
      this.chain.splice(positionInt, 1);
      return this;
    }
    else
    {
      this.chain = [];
      throw new Error('Error') 
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let ret = '';
    for (let i = 0; i < this.chain.length; ++i)
    {
      if (i !== 0) ret += '~~';
      ret += this.chain[i];
    }
    this.chain = [];
    return ret;
  },
  
  chain: []
};

module.exports = chainMaker;
