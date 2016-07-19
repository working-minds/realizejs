'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _i18n = require('../i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    resource: _prop_types2.default.string,
    name: _prop_types2.default.string
  },

  localizeResourceField: function localizeResourceField(name, resource) {
    if (!name) {
      name = this.props.name;
    }
    if (!resource) {
      resource = this.props.resource;
    }

    if (name === undefined || resource === undefined) {
      return '';
    }

    var resourceKey = void 0;
    try {
      resourceKey = 'resources.' + resource + '.fields.' + name;
      return _i18n2.default.t(resourceKey, true);
    } catch (err) {
      resourceKey = 'resources.defaults.fields.' + name;
      try {
        return _i18n2.default.t(resourceKey, true);
      } catch (err) {
        return name;
      }
    }
  }
};