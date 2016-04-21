import RealizeConfig from './config';
import PropTypes from './prop_types';
import utils from './utils';
import themes from './theme/theme.js';
import i18n from './i18n/i18n';

import defaultTheme from 'theme/mappings/default';
import materializeTheme from 'theme/mappings/materialize';

export default {
  ...RealizeConfig,

  PropTypes,
  utils,
  themes,
  i18n
}

// TODO: remover
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/button/button';


ReactDOM.render(
  <Button
    name="my button"
    actionUrl="https://randomuser.me/api/"
    method="GET"
    onSuccess={(data) => console.log(data)}>
  </Button>,
  document.getElementById('app')
)
