var riot = require('riot-compiler');

module.exports = function (src) {
  return riot.compile(src);
};
