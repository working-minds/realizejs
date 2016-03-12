var utils = require('../utils.js');

var i18n = {
  locales: {},
  currentLocale: 'en',

  registerLocale: function(newLocaleObj, locale) {
    if(!$.isPlainObject(newLocaleObj)) {
      throw 'Invalid Locale Object.'
    }

    if(!locale) {
      throw 'Invalid Locale Name.';
    }

    var currentLocaleObj = this.locales[locale] || {};
    this.locales[locale] = $.extend(true, {}, currentLocaleObj, newLocaleObj);
  },

  setLocale: function(locale) {
    this.currentLocale = locale;
  },

  translate: function(key, throwsException) {
    if(throwsException === undefined) {
      throwsException = false;
    }

    if(typeof key !== "string") {
      if(throwsException) {
        throw 'Key is not a string';
      }

      return '';
    }

    var currentLocale = this.currentLocale;
    var localeObj = this.locales[currentLocale];

    var translation = utils.getProp(key, localeObj);
    if(!translation) {
      if(throwsException) {
        throw 'Key not found in locale object';
      }

      translation = key;
    }

    return translation;
  },

  t: function(key, throwsException) {
    return this.translate(key, throwsException);
  }
};

module.exports = i18n;