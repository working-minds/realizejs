import $ from 'jquery';
import utils from '../utils';

export default {
  themes: {},
  defaultTheme: 'default',
  currentTheme: 'materialize',

  registerTheme (newThemeObj, theme) {
    if(!$.isPlainObject(newThemeObj)) {
      throw 'Invalid Theme Object.'
    }

    if(!theme) {
      throw 'Invalid Theme Name.';
    }

    var currentThemeObj = this.themes[theme] || {};
    this.themes[theme] = $.extend({}, currentThemeObj, newThemeObj);
  },

  getCurrent () {
    var defaultThemeObj = this.themes[this.defaultTheme];
    var currentThemeObj = this.themes[this.currentTheme];

    return $.extend({}, defaultThemeObj, currentThemeObj);
  },

  getProp (key) {
    if(!key) {
      return '';
    }

    var currentTheme = this.getCurrent();
    return utils.getProp(key, currentTheme);
  },

  getCssClass (keys) {
    var keysArr = keys.split(' ');
    var themeClass = "";

    while(keysArr.length > 0) {
      var key = keysArr.shift();
      var classKey = key + '.cssClass';

      themeClass += this.getProp(classKey) + ' ';
    }

    return themeClass.trim();
  }
}
