var utils = require('../utils.js');

var themes = {
  themes: {},
  defaultTheme: 'default',
  currentTheme: 'materialize',

  registerTheme: function(newThemeObj, theme) {
    if(!$.isPlainObject(newThemeObj)) {
      throw 'Invalid Theme Object.'
    }

    if(!theme) {
      throw 'Invalid Theme Name.';
    }

    var currentThemeObj = this.themes[theme] || {};
    this.themes[theme] = $.extend({}, currentThemeObj, newThemeObj);
  },

  getCurrent: function() {
    var defaultThemeObj = this.themes[this.defaultTheme];
    var currentThemeObj = this.themes[this.currentTheme];

    return $.extend({}, defaultThemeObj, currentThemeObj);
  },

  getProp: function(key) {
    if(!key) {
      return '';
    }

    var currentTheme = this.getCurrent();
    return utils.getProp(key, currentTheme);
  },

  getCssClass: function(keys) {
    var keysArr = keys.split(' ');
    var themeClass = "";

    while(keysArr.length > 0) {
      var key = keysArr.shift();
      var classKey = key + '.cssClass';

      themeClass += this.getProp(classKey) + ' ';
    }

    return themeClass.trim();
  }
};

module.exports = themes;