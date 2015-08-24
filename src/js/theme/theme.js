Realize.themes = {};

Realize.themes.getCurrent = function() {
  var defaultTheme = Realize.themes.default;
  var currentTheme = Realize.themes[Realize.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

Realize.themes.getProp = function(key) {
  if(!key) {
    return '';
  }

  var currentTheme = this.getCurrent();
  return Realize.utils.getProp(key, currentTheme);
};

Realize.themes.getCssClass = function(keys) {
  var keysArr = keys.split(' ');
  var themeClass = "";

  while(keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += this.getProp(classKey) + ' ';
  }

  return themeClass.trim();
};
