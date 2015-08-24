Realize.locale.register = function(newLocaleObj, language) {
  if(!$.isPlainObject(newLocaleObj)) {
    throw 'Invalid Locale Object.'
  }

  if(!language) {
    throw 'Invalid Language String.';
  }

  var currentLocaleObj = Realize.locale[language] || {};
  Realize.locale.languages[language] = $.extend({}, currentLocaleObj, newLocaleObj);
};