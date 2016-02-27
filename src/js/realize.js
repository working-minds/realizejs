var Realize = {};

//TODO: ajustar o assign do config
var RealizeConfig = require('./config.js');
Realize.config = RealizeConfig.config;
Realize.setConfig = RealizeConfig.setConfig;

Realize.PropTypes = require('./propTypes.js');
Realize.utils = require('./utils.js');
Realize.themes = require('./theme/theme.js');
Realize.i18n = require('./i18n/i18n.js');

module.exports = Realize;