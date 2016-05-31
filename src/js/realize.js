import config from './init/config';
import themes from './theme/theme.js';
import i18n from './i18n/i18n';

import merge from 'lodash/merge';

export const Realize = {
  config,
  themes,
  i18n,

  setConfig (newConfig) {
    merge(this.config, newConfig);
  }
};

export default Realize;
