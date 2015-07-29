var WRF = {};

WRF.themes = {};
WRF.config = {
  theme: 'materialize'
};

WRF.themeProp = function(key) {
  if(!key) {
    return '';
  }

  var defaultTheme = WRF.themes.default;
  var theme = $.extend({}, defaultTheme, WRF.themes[WRF.config.theme]);
  var key_array = key.split('.');
  var prop = theme;

  while(key_array.length > 0) {
    prop = prop[key_array.pop()];
  }

  return prop;
};

