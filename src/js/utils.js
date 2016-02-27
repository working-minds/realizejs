var utils = {
  getProp: function(key, obj) {
    var keyArr = key.split('.');
    var prop = obj;

    try {
      while(keyArr.length > 0) {
        prop = prop[keyArr.shift()];
      }
    } catch(err) {
      return '';
    }
    return prop;
  }
};

module.exports = utils;