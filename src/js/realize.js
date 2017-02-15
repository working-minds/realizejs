import realizeConfig from './init/config';
import realizeThemes from './theme/theme.js';
import realizeI18n from './i18n/i18n';

import merge from 'lodash/merge';

export const config = realizeConfig;
export const themes = realizeThemes;
export const i18n = realizeI18n;
export const setConfig = (newConfig) => {
  merge(config, newConfig);
};

export default {
  config: realizeConfig,
  themes: realizeThemes,
  i18n: realizeI18n,
  setConfig,
};
