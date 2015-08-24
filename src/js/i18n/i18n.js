Realize.i18n = {};
Realize.i18n.locales = {};

Realize.i18n.registerLocale = function(newLocaleObj, locale) {
  if(!$.isPlainObject(newLocaleObj)) {
    throw 'Invalid Locale Object.'
  }

  if(!locale) {
    throw 'Invalid Locale Name.';
  }

  var currentLocaleObj = Realize.i18n.locales[locale] || {};
  Realize.i18n.locales[locale] = $.extend({}, currentLocaleObj, newLocaleObj);
};

Realize.i18n.setLocale = function(locale) {
  Realize.config.locale = locale;
};

Realize.i18n.translate = function(key) {
  var currentLocale = Realize.config.locale;
  var localeObj = Realize.i18n.locales[currentLocale];

  return Realize.utils.getProp(key, localeObj);
};

Realize.t = Realize.i18n.translate;