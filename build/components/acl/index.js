'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatePermissionButton = exports.PrincipalActionButtons = exports.PermissionManager = exports.LabelPermissions = exports.IndexPermissions = exports.EditPermissions = undefined;

var _modals = require('./modals');

Object.keys(_modals).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modals[key];
    }
  });
});

var _edit_permissions = require('./edit_permissions');

var _edit_permissions2 = _interopRequireDefault(_edit_permissions);

var _index_permissions = require('./index_permissions');

var _index_permissions2 = _interopRequireDefault(_index_permissions);

var _label_permission = require('./label_permission');

var _label_permission2 = _interopRequireDefault(_label_permission);

var _permission_manager = require('./permission_manager');

var _permission_manager2 = _interopRequireDefault(_permission_manager);

var _principal_action_buttons = require('./principal_action_buttons');

var _principal_action_buttons2 = _interopRequireDefault(_principal_action_buttons);

var _update_permission_button = require('./update_permission_button');

var _update_permission_button2 = _interopRequireDefault(_update_permission_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EditPermissions = _edit_permissions2.default;
exports.IndexPermissions = _index_permissions2.default;
exports.LabelPermissions = _label_permission2.default;
exports.PermissionManager = _permission_manager2.default;
exports.PrincipalActionButtons = _principal_action_buttons2.default;
exports.UpdatePermissionButton = _update_permission_button2.default;