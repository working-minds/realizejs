WRF.themes = {};

WRF.getTheme = function() {
  var defaultTheme = WRF.themes.default;
  var currentTheme = WRF.themes[WRF.config.theme];

  return $.extend({}, defaultTheme, currentTheme);
};

WRF.themeProp = function(key, theme) {
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

WRF.themeClass = function(keys) {
  var theme = this.getTheme();
  var keysArr = keys.split(' ');
  var themeClass = "";

  while(keysArr.length > 0) {
    var key = keysArr.shift();
    var classKey = key + '.cssClass';

    themeClass += WRF.themeProp(classKey, theme) + ' ';
  }

  return themeClass.trim();
};
