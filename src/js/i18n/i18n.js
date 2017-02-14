import { getProp } from '../utils';
import _ from 'lodash';

import ptBR from './locales/pt-BR';
import en from './locales/en';

import moment from 'moment';
import 'moment/locale/pt-br';

import numeral from 'numeral';
import numeralPtBR from 'numeral/locales/pt-br';

const i18n = {
  locales: {},
  currentLocale: 'en',

  registerLocale(newLocaleObj, locale) {
    if (!_.isPlainObject(newLocaleObj)) {
      throw new Error('Invalid Locale Object.');
    }

    if (!locale) {
      throw new Error('Invalid Locale Name.');
    }

    const currentLocaleObj = this.locales[locale] || {};
    this.locales[locale] = _.merge(currentLocaleObj, newLocaleObj);
  },

  setLocale(locale) {
    this.currentLocale = locale;
    // TODO normalize the locale key names - neither lib follows the standards
    numeral.locale(locale.toLowerCase());
    moment.locale(locale.toLowerCase());
  },

  translate(key, throwsException = false) {
    if (typeof key !== 'string') {
      if (throwsException) {
        throw new Error('Key is not a string');
      }

      return '';
    }

    const currentLocale = this.currentLocale;
    const localeObj = this.locales[currentLocale];

    let translation = getProp(key, localeObj);
    if (!translation) {
      if (throwsException) {
        throw new Error('Key not found in locale object');
      }

      translation = key;
    }

    return translation;
  },

  t(key, throwsException) {
    return this.translate(key, throwsException);
  },
};

i18n.registerLocale(en, 'en');
i18n.registerLocale(ptBR, 'pt-BR');

// both numeral and moment load english by default
numeral.locale('pt-br', numeralPtBR);

i18n.setLocale(i18n.currentLocale);

export default i18n;
