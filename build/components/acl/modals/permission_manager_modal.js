'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

var _components = require('../../../components');

var _mixins = require('../../../mixins');

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

var PermissionManagerModal = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  _inherits(PermissionManagerModal, _Component);

  function PermissionManagerModal() {
    _classCallCheck(this, PermissionManagerModal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PermissionManagerModal).apply(this, arguments));
  }

  _createClass(PermissionManagerModal, [{
    key: 'onSuccess',
    value: function onSuccess() {
      (0, _jquery2.default)('#' + this.props.modalId).closeModal();
      if (this.props.reloadPageAfterSubmit) window.location.reload();
    }
  }, {
    key: 'getPostData',
    value: function getPostData() {
      var principalPermissions = this.refs.permissionManager.state.principalsPermissions;
      var postData = [];

      for (var i = 0; i < principalPermissions.length; i++) {
        if (!!principalPermissions[i].changed) {
          var permissionsByPrincipal = principalPermissions[i].permissions;
          var permissions = permissionsByPrincipal.map(function (a) {
            return a.permission;
          });
          var implies = permissionsByPrincipal.map(function (a) {
            return a.implies;
          });

          implies = [].concat.apply([], implies);
          permissions = (0, _difference2.default)(permissions, implies);

          postData.push({
            principal_id: principalPermissions[i].principal_id,
            principal_type: principalPermissions[i].principal_type,
            permissions: permissions
          });
        }
      }

      return {
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType,
        permissions_by_principal: postData
      };
    }
  }, {
    key: 'loadPrincipalsPermissions',
    value: function loadPrincipalsPermissions(selectedDatas) {
      this.refs.permissionManager.createPrincipalsPermissions(selectedDatas);
    }
  }, {
    key: 'handleUpdatePermissions',
    value: function handleUpdatePermissions() {
      var url = this.props.updatePermissionsBaseUrl;
      var postData = this.getPostData();
      var method = 'PUT';
      this.performRequest(url, postData, method);
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var component = [];
      var title = !!this.props.title ? this.props.title : this.props.resource.name;

      component.push(_react2.default.createElement(
        'h5',
        null,
        'Gerenciar Permissões - ',
        title
      ));

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.Modal,
        {
          id: this.props.modalId,
          className: this.props.className,
          headerSize: this.props.headerSize,
          opened: true,
          ref: 'modal'
        },
        _react2.default.createElement(
          _components.ModalHeader,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Gerenciar Permissões - ',
            this.props.resource.name
          )
        ),
        _react2.default.createElement(
          _components.ModalContent,
          null,
          _react2.default.createElement(
            'div',
            { className: 'permissions-modal-content' },
            _react2.default.createElement(_components.PermissionManager, {
              ref: 'permissionManager',
              handleRemovePrincipal: this.props.handleRemovePrincipal,
              permissionManagerInModal: this.props.permissionManagerInModal,
              principal: this.props.principal,
              principalType: this.props.principalType,
              resource: this.props.resource,
              resourceType: this.props.resourceType,
              principalsBaseUrl: this.props.principalsBaseUrl,
              principalsPermissionsBaseUrl: this.props.principalsPermissionsBaseUrl
            })
          )
        ),
        _react2.default.createElement(
          _components.ModalFooter,
          null,
          _react2.default.createElement(
            'div',
            { className: 'modal-footer', style: { float: 'right' } },
            _react2.default.createElement(_components.CloseModalButton, { modalId: this.props.modalId }),
            _react2.default.createElement(_components.UpdatePermissionsButton, { handleUpdatePermissions: this.handleUpdatePermissions })
          )
        )
      );
    }
  }]);

  return PermissionManagerModal;
}(_react.Component), _class3.propTypes = {
  permissionManagerInModal: _prop_types2.default.bool,
  principal: _prop_types2.default.object,
  principalType: _prop_types2.default.string,
  resource: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  className: _prop_types2.default.string,
  modalId: _prop_types2.default.string,
  updatePermissionsBaseUrl: _prop_types2.default.string,
  principalsBaseUrl: _prop_types2.default.string,
  principalsPermissionsBaseUrl: _prop_types2.default.string,
  title: _prop_types2.default.string,
  reloadPageAfterSubmit: _prop_types2.default.bool
}, _class3.defaultProps = {
  permissionManagerInModal: true,
  principal: null,
  principalType: '',
  resource: null,
  resourceType: '',
  title: null,
  className: 'permission-manager-modal',
  modalId: 'permission-manager-modal',
  updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
  principalsBaseUrl: '/wkm_acl_ui/principals',
  principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions',
  reloadPageAfterSubmit: false
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'onSuccess', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onSuccess'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleUpdatePermissions', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleUpdatePermissions'), _class2.prototype)), _class2)) || _class);
exports.default = PermissionManagerModal;