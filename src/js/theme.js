Realize.themes = {};

Realize.getTheme = function() {
  var defaultTheme = Realize.themes.default;
  var currentTheme = Realize.themes[Realize.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

Realize.themeProp = function(key, theme) {
  if(!key) {
    return '';
  }

  if(theme === undefined) {
    theme = this.getTheme();
  }

  var keyArr = key.split('.');
  var prop = theme;

  try {
    while(keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch(err) {
    return '';
  }

  return prop;
};

Realize.themeClass = function(keys) {
  var theme = this.getTheme();
  var keysArr = keys.split(' ');
  var themeClass = "";

  while(keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += Realize.themeProp(classKey, theme) + ' ';
  }

  return themeClass.trim();
};
