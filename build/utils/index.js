'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorators = exports.uuid = undefined;
exports.getProp = getProp;

var _uuid2 = require('./uuid');

var _uuid = _interopRequireWildcard(_uuid2);

var _decorators2 = require('./decorators');

var _decorators = _interopRequireWildcard(_decorators2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.uuid = _uuid;
exports.decorators = _decorators;
function getProp(key, obj) {
  var keyArr = key.split('.');
  var prop = obj;

  try {
    while (keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch (err) {
    return '';
  }
  return prop;
};