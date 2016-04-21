import * as RealizeConfig from './config';
import PropTypes from './prop_types';
import utils from './utils';
import themes from './theme/theme.js';
import i18n from './i18n/i18n';

import defaultTheme from 'theme/mappings/default';
import materializeTheme from 'theme/mappings/materialize';

const config = RealizeConfig.config;
const setConfig = RealizeConfig.setConfig.bind(RealizeConfig);

const Realize = {
  config,
  setConfig,

  PropTypes,
  utils,
  themes,
  i18n
};

export {
  config,
  setConfig,

  PropTypes,
  utils,
  themes,
  i18n
};
export default Realize;
