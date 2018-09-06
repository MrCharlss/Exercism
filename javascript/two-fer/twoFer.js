
export default twoFer = (name) => { };

TwoFer.prototype.twoFer = function (who = 'you') {
  if (name == '') {
    return `One for ${who}, one for me.`;
  } else {
    return `One for ${name}, one for me.`
  }

};

module.exports = TwoFer;

