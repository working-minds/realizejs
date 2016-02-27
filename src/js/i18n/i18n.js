var i18n = {
  locales: {},

  registerLocale: function(newLocaleObj, locale) {
    if(!$.isPlainObject(newLocaleObj)) {
      throw 'Invalid Locale Object.'
    }

    if(!locale) {
      throw 'Invalid Locale Name.';
    }

    var currentLocaleObj = this.locales[locale] || {};
    this.locales[locale] = $.extend({}, currentLocaleObj, newLocaleObj);
  },

  setLocale: function(locale) {
    Realize.config.locale = locale;
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

    var currentLocale = Realize.config.locale;
    var localeObj = this.locales[currentLocale];

    var translation = Realize.utils.getProp(key, localeObj);
    if(!translation) {
      if(throwsException) {
        throw 'Key not found in locale object';
      }

      translation = key;
    }

    return translation;
  },

  t: function(key, throwsException) {
    return this.translate(keu, throwsException);
  }
};

module.exports = i18n;