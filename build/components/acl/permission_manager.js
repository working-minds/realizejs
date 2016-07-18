'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _utils = require('../../utils');

var _components = require('../../components');

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

var PermissionManager = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(PermissionManager, _Component);

  function PermissionManager() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, PermissionManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PermissionManager)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      principalsPermissions: {},
      selectedPrincipal: _this.props.principal,
      principals: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PermissionManager, [{
    key: 'getSelectedPrincipal',
    value: function getSelectedPrincipal() {
      return !!this.state.selectedPrincipal ? this.state.selectedPrincipal : this.props.principal;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadPrincipals();
      this.loadPrincipalsPermissions();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.loadPrincipals();
    }
  }, {
    key: 'addPermissionChecked',
    value: function addPermissionChecked(permissions) {
      var principalsPermissions = this.state.principalsPermissions;
      var selectedPrincipal = this.getSelectedPrincipal();

      for (var i = 0; i < principalsPermissions.length; i++) {
        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
          principalsPermissions[i].permissions.push(permissions);
          principalsPermissions[i].changed = true;
        }
      }

      if (principalsPermissions.length === 0) {
        principalsPermissions.push({
          principal_id: selectedPrincipal.id,
          principal_type: this.props.principalType,
          permissions: [permissions],
          changed: true
        });
      }

      this.setState({
        principalsPermissions: principalsPermissions
      });
    }
  }, {
    key: 'switchPrincipalPermissions',
    value: function switchPrincipalPermissions(principalPermission) {
      var principalsPermissions = this.state.principalsPermissions;
      var selectedPrincipal = this.getSelectedPrincipal();

      for (var i = 0; i < principalsPermissions.length; i++) {
        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
          principalsPermissions.splice(i, 1);
        }
      }

      principalsPermissions.push(principalPermission);
      return principalsPermissions;
    }
  }, {
    key: 'createPrincipalsPermissions',
    value: function createPrincipalsPermissions(principals) {
      var principalsPermissions = this.state.principalsPermissions;

      for (var i = 0; i < principals.length; i++) {
        if (!this.alreadyExistPrincipalPermissions(principals[i])) {
          principalsPermissions.push({
            principal_id: principals[i].principal_id,
            principal_type: principals[i].principal_type,
            permissions: []
          });
        }
      }

      this.setState({
        principalsPermissions: principalsPermissions
      });
    }
  }, {
    key: 'alreadyExistPrincipalPermissions',
    value: function alreadyExistPrincipalPermissions(principal) {
      var principalsPermissions = this.state.principalsPermissions;
      var belongs = false;

      for (var i = 0; i < principalsPermissions.length; i++) {
        if (principalsPermissions[i].principal_id === principal.id) {
          belongs = true;
          break;
        }
      }

      return belongs;
    }
  }, {
    key: 'loadPrincipals',
    value: function loadPrincipals() {
      var _this2 = this;

      _jquery2.default.ajax({
        url: this.props.principalsBaseUrl,
        dataType: 'json',
        async: false,
        data: {
          resource_id: this.props.resource.id,
          resource_type: this.props.resourceType
        },
        success: function success(data) {
          _this2.setState({
            principals: data.principals,
            selectedPrincipal: _this2.getSelectedPrincipal() || data.principals[0]
          });
        }
      });
    }
  }, {
    key: 'loadPrincipalsPermissions',
    value: function loadPrincipalsPermissions() {
      var _this3 = this;

      _jquery2.default.ajax({
        url: this.props.principalsPermissionsBaseUrl,
        dataType: 'json',
        async: false,
        data: {
          resource_id: this.props.resource.id,
          resource_type: this.props.resourceType
        },
        success: function success(data) {
          _this3.setState({
            principalsPermissions: data.principals
          });
        }
      });
    }
  }, {
    key: 'principalPermission',
    value: function principalPermission() {
      var principalsPermissions = this.state.principalsPermissions;
      var selectedPrincipal = this.getSelectedPrincipal();

      var principalPermissions = null;
      for (var i = 0; i < principalsPermissions.length; i++) {
        if (selectedPrincipal.id === principalsPermissions[i].principal_id) {
          principalPermissions = principalsPermissions[i];
        }
      }

      return principalPermissions;
    }
  }, {
    key: 'rowCssClass',
    value: function rowCssClass(data) {
      var selectedPrincipal = this.state.selectedPrincipal;

      if (!!data && !!selectedPrincipal) {
        if (data.id === selectedPrincipal.id) {
          return 'row-selected';
        }
      }

      return undefined;
    }
  }, {
    key: 'dataGridPrincipals',
    value: function dataGridPrincipals() {
      return {
        dataRows: this.state.principals,
        count: 10
      };
    }
  }, {
    key: 'handleSelectPrincipal',
    value: function handleSelectPrincipal(event, data) {
      this.setState({
        selectedPrincipal: data
      });
    }
  }, {
    key: 'handleRemovePrincipal',
    value: function handleRemovePrincipal() {
      this.props.handleRemovePrincipal(this.state.selectedPrincipal);
    }
  }, {
    key: 'handleOpenPrincipalModal',
    value: function handleOpenPrincipalModal() {
      (0, _jquery2.default)('#add-principals-modal').openModal();
      (0, _jquery2.default)(window).resize();
    }
  }, {
    key: 'handleRemovePermissionChecked',
    value: function handleRemovePermissionChecked(permission) {
      var principalPermission = this.principalPermission();
      var permissions = principalPermission.permissions;

      for (var i = 0; i < permissions.length; i++) {
        if (permissions[i].permission === permission) {
          permissions.splice(i, 1);
        }
      }

      principalPermission.permissions = permissions;
      principalPermission.changed = true;
      var principalsPermissions = this.switchPrincipalPermissions(principalPermission);

      this.setState({
        principalsPermissions: principalsPermissions
      });
    }
  }, {
    key: 'handleAddPermissionChecked',
    value: function handleAddPermissionChecked(permission) {
      var _this4 = this;

      var selectedPrincipal = this.getSelectedPrincipal();
      var principalId = selectedPrincipal.id;

      _jquery2.default.ajax({
        url: this.props.impliesPermissionBaseUrl,
        method: 'GET',
        dataType: 'json',
        data: {
          principal_id: principalId,
          principal_type: this.props.principalType,
          resource_id: this.props.resource.id,
          resource_type: this.props.resourceType,
          permission: permission
        },
        success: function success(data) {
          _this4.addPermissionChecked(data.permissions);
        }
      });
    }
  }, {
    key: 'renderPrincipalsGrid',
    value: function renderPrincipalsGrid() {
      var component = [];
      var principal = this.props.principal;

      if (!principal) {
        component.push(_react2.default.createElement(
          'h5',
          null,
          'Usuários/Grupo:'
        ));
        component.push(_react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'principal-grid' },
            _react2.default.createElement(_components.Grid, _extends({
              ref: 'grid'
            }, this.props.PrincipalGridProps, {
              key: Math.random(),
              onClickRow: this.handleSelectPrincipal,
              tableRowCssClass: this.rowCssClass,
              data: this.dataGridPrincipals(),
              url: this.props.principalsBaseUrl
            }))
          ),
          this.renderActionButtons()
        ));
      }

      return component;
    }
  }, {
    key: 'renderActionButtons',
    value: function renderActionButtons() {
      var component = [];

      component.push(_react2.default.createElement(_components.PrincipalActionButtons, {
        handleRemovePrincipal: this.handleRemovePrincipal,
        handleOpenPrincipalModal: this.handleOpenPrincipalModal,
        modalContainerId: 'principals-modal'
      }));

      return component;
    }
  }, {
    key: 'renderEditPermission',
    value: function renderEditPermission() {
      var component = [];
      var selectedPrincipal = this.getSelectedPrincipal();
      var principalType = !!this.state.selectedPrincipal ? selectedPrincipal.principal_type : this.props.principalType;

      if (!!selectedPrincipal) {
        if (!selectedPrincipal.principal_type) principalType = this.props.principalType;

        component.push(_react2.default.createElement(
          'h5',
          null,
          'Permissões de ',
          selectedPrincipal.name,
          ':'
        ));
        component.push(_react2.default.createElement(EditPermissions, {
          principal: selectedPrincipal,
          principalType: principalType,
          principalPermission: this.principalPermission(),
          resource: this.props.resource,
          resourceType: this.props.resourceType,
          handleRemovePermissionChecked: this.handleRemovePermissionChecked,
          handleAddPermissionChecked: this.handleAddPermissionChecked,
          afterCreateEntry: this.forceUpdate
        }));
      }

      return component;
    }
  }, {
    key: 'renderAddPrincipalsModal',
    value: function renderAddPrincipalsModal() {
      if (!this.props.permissionManagerInModal) {
        return [_react2.default.createElement(IndexPrincipal, { handleAddPrincipal: this.handleAddPrincipal })];
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderPrincipalsGrid(),
        this.renderEditPermission(),
        this.renderAddPrincipalsModal()
      );
    }
  }]);

  return PermissionManager;
}(_react.Component), _class3.propTypes = {
  principal: _prop_types2.default.object,
  principalType: _prop_types2.default.string,
  resource: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  PrincipalGridProps: _prop_types2.default.object,
  permissionManagerInModal: _prop_types2.default.bool,
  principalsBaseUrl: _prop_types2.default.string,
  principalsPermissionsBaseUrl: _prop_types2.default.string,
  impliesPermissionBaseUrl: _prop_types2.default.string,
  permissionsBaseUrl: _prop_types2.default.string
}, _class3.defaultProps = {
  principal: null,
  principalType: '',
  resource: null,
  resourceType: '',
  permissionManagerInModal: false,
  principalsBaseUrl: '/wkm_acl_ui/principals',
  principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
  impliesPermissionBaseUrl: '/wkm_acl_ui/implies',
  permissionsBaseUrl: '/wkm_acl_ui/permissions',
  PrincipalGridProps: {
    selectable: false,
    pagination: false,
    columns: {
      name: {
        label: 'Nome'
      },
      principal_type_translated: {
        label: 'Tipo'
      }
    },
    tableClassName: 'table bordered',
    clearThemeTable: true,
    actionButtons: {
      member: [],
      collection: []
    }
  }
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleSelectPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleOpenPrincipalModal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleOpenPrincipalModal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePermissionChecked', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePermissionChecked'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleAddPermissionChecked', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPermissionChecked'), _class2.prototype)), _class2)) || _class);
exports.default = PermissionManager;