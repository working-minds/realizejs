import {getProp} from '../utils';
import lodash from 'lodash'

import ptBR from './locales/pt-BR';
import en from './locales/en';

import moment from 'moment';
import 'moment/locale/pt-br';

import numeral from 'numeral'
import numeralPtBR from 'numeral/languages/pt-br'

const i18n = {
  locales: {},
  currentLocale: 'en',

  registerLocale: function(newLocaleObj, locale) {
    if(!lodash.isPlainObject(newLocaleObj)) {
      throw 'Invalid Locale Object.'
    }

    if(!locale) {
      throw 'Invalid Locale Name.';
    }

    var currentLocaleObj = this.locales[locale] || {};
    this.locales[locale] = lodash.merge(currentLocaleObj, newLocaleObj);
  },

  setLocale: function(locale) {
    this.currentLocale = locale;
    // TODO normalize the locale key names - neither lib follows the standards
    numeral.language(locale.toLowerCase());
    moment.locale(locale.toLowerCase());
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

    var translation = getProp(key, localeObj);
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

i18n.registerLocale(en, 'en');
i18n.registerLocale(ptBR, 'pt-BR');
// both numeral and moment load english by default
numeral.language('pt-br', numeralPtBR);

i18n.setLocale(i18n.currentLocale);

export default i18n;
