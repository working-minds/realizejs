'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _utils = require('../../utils');

var _input = require('../../components/input');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var EditPermissions = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(EditPermissions, _Component);

  function EditPermissions() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, EditPermissions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EditPermissions)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      permissions: [],
      permissionsChecked: _this.initialPrincipalPermissions()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditPermissions, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPermissions();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        permissionsChecked: nextProps.principalPermission
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _jquery2.default)('.permission-manager-modal').resize();
    }
  }, {
    key: 'initialPrincipalPermissions',
    value: function initialPrincipalPermissions() {
      return !!this.props.principalPermissions ? this.props.principalPermissions : [];
    }
  }, {
    key: 'checked',
    value: function checked(permission) {
      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
      var checked = false;

      if (!!permissionsChecked) {
        for (var i = 0; i < permissionsChecked.length; i++) {
          var permissions = permissionsChecked[i].permission;
          var implies = permissionsChecked[i].implies;

          if (!_jquery2.default.isArray(permissions)) {
            permissions = [permissions];
          }

          if (permissions.indexOf(permission) !== -1 || implies.indexOf(permission) !== -1) {
            checked = true;
          }
        }
      }

      return checked;
    }
  }, {
    key: 'disabled',
    value: function disabled(permission) {
      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
      var disabled = false;

      if (!!permissionsChecked) {
        for (var i = 0; i < permissionsChecked.length; i++) {
          var permissionName = permissionsChecked[i].permission;
          var implies = permissionsChecked[i].implies;
          var inherited = permissionsChecked[i].inherited;
          if (implies.indexOf(permission) !== -1 || permissionName === permission && inherited === true) {
            disabled = true;
          }
        }
      }

      return disabled;
    }
  }, {
    key: 'grantPermission',
    value: function grantPermission(permission) {
      var url = this.props.permissionsBaseUrl;
      var data = {
        principal_id: this.props.principal.id,
        principal_type: this.props.principalType,
        resource_id: this.props.resource.id,
        resourceType: this.props.resourceType,
        permissions: [permission]
      };

      this.performRequest(url, data, 'POST', 'json');
    }
  }, {
    key: 'revokePermission',
    value: function revokePermission(permission) {
      var url = this.props.permissionsBaseUrl + '/' + this.props.principal.id;
      var data = {
        principal_id: this.props.principal.id,
        principal_type: this.props.principalType,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
        permissions: [permission]
      };

      this.performRequest(url, data, 'DELETE', 'json');
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions() {
      var _this2 = this;

      var context = this;

      _jquery2.default.ajax({
        url: this.props.permissionsBaseUrl + '/' + this.props.principal.id,
        method: 'GET',
        dataType: 'json',
        data: {
          principal_type: this.props.principalType,
          principal_id: this.props.principal.id,
          resource_id: this.props.resource.id,
          resource_type: this.props.resourceType
        },
        success: function success(data) {
          _this2.setState({
            permissions: data.permissions
          }, function () {
            context.props.afterCreateEntry();
          });
        }
      });
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess() {
      this.getPermissions();
    }
  }, {
    key: 'addPermissionChecked',
    value: function addPermissionChecked(permission) {
      this.props.handleAddPermissionChecked(permission);
    }
  }, {
    key: 'removePermissionChecked',
    value: function removePermissionChecked(permission) {
      this.props.handleRemovePermissionChecked(permission);
    }
  }, {
    key: 'belongsToPermissionsChecked',
    value: function belongsToPermissionsChecked(permission) {
      var permissionsChecked = !!this.state.permissionsChecked ? this.state.permissionsChecked.permissions : [];
      var belongs = false;

      for (var i = 0; i < permissionsChecked.length; i++) {
        if (permissionsChecked[i].permissions === permission) {
          belongs = true;
        }
      }

      return belongs;
    }
  }, {
    key: 'checkboxId',
    value: function checkboxId(permission) {
      return 'permissions_' + permission + '_';
    }
  }, {
    key: 'checkboxName',
    value: function checkboxName() {
      return 'permissions[]';
    }
  }, {
    key: 'handleChange',
    value: function handleChange(permission) {
      var _this3 = this;

      return function () {
        var checkbox = _reactDom2.default.findDOMNode(_this3.refs['checkbox_' + permission]);
        var checked = (0, _jquery2.default)((0, _jquery2.default)(checkbox).find('input')).is(':checked');
        if (!!_this3.props.saveOnSelect) {
          if (checked) {
            _this3.grantPermission(permission);
          } else {
            _this3.revokePermission(permission);
          }
        } else {
          if (checked) {
            if (!_this3.belongsToPermissionsChecked(permission)) {
              _this3.addPermissionChecked(permission);
            }
          } else {
            _this3.removePermissionChecked(permission);
          }
        }
      };
    }
  }, {
    key: 'renderPermissionGroup',
    value: function renderPermissionGroup() {
      var _this4 = this;

      var component = [];
      var permissions = this.state.permissions;

      if (!!permissions) {
        permissions.forEach(function (permission) {
          component.push(_react2.default.createElement(_input.Input, {
            key: _utils.uuid.v4(),
            component: 'checkbox',
            ref: 'checkbox_' + permission,
            label: I18n.t('permissions.' + permission),
            value: permission,
            checked: _this4.checked(permission),
            disabled: _this4.disabled(permission),
            onChange: _this4.handleChange.bind(_this4, permission),
            id: _this4.checkboxId(permission),
            name: _this4.checkboxName(),
            className: 'col s12'
          }));
        });
      }

      return component;
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var component = [];
      if (!!this.props.title) {
        component.push(_react2.default.createElement(
          'h3',
          null,
          this.props.title
        ));
      }

      return component;
    }
  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var component = [];
      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: '_method', value: 'put' }));
      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'resource_type', value: this.props.resourceType }));
      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'resource_id', value: this.props.resource.id }));
      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'principal_type', value: this.props.principalType }));
      component.push(_react2.default.createElement('input', { key: _utils.uuid.v4(), type: 'hidden', name: 'principal_id', value: this.props.principal.id }));

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row permissions-manager' },
        this.renderTitle(),
        _react2.default.createElement(
          'div',
          { className: 'box-edit-permissions' },
          this.renderHiddenInputs(),
          this.renderPermissionGroup()
        )
      );
    }
  }]);

  return EditPermissions;
}(_react.Component), _class3.propTypes = {
  principal: _prop_types2.default.object,
  principalType: _prop_types2.default.string,
  resource: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  title: _prop_types2.default.string,
  saveOnSelect: _prop_types2.default.bool,
  principalPermissions: _prop_types2.default.object,
  permissionsBaseUrl: _prop_types2.default.permissionsBaseUrl
}, _class3.defaultProps = {
  principal: null,
  principalType: '',
  resource: null,
  resourceType: null,
  title: '',
  saveOnSelect: false,
  principalPermissions: null,
  permissionsBaseUrl: '/wkm_acl_ui/permissions'
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
exports.default = EditPermissions;