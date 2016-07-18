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

var AclModalsWrapper = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  _inherits(AclModalsWrapper, _Component);

  function AclModalsWrapper() {
    _classCallCheck(this, AclModalsWrapper);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AclModalsWrapper).apply(this, arguments));
  }

  _createClass(AclModalsWrapper, [{
    key: 'onSuccess',
    value: function onSuccess() {
      this.forceUpdate();
    }
  }, {
    key: 'handleAddPrincipal',
    value: function handleAddPrincipal(selectedDatas) {
      var url = this.props.urlProps.principalsBaseUrl;
      var data = {
        principals: selectedDatas,
        resource_id: this.props.resource.id,
        resource_type: this.props.resourceType
      };

      this.performRequest(url, data, 'POST');
      (0, _jquery2.default)('#add-principals-modal').closeModal();
      this.refs.permissionManagerModal.loadPrincipalsPermissions(selectedDatas);
    }
  }, {
    key: 'handleRemovePrincipal',
    value: function handleRemovePrincipal(selectedPrincipal) {
      if (confirm('Você tem certeza que deseja retirar as permissões desse usuário/grupo?')) {
        var url = this.props.urlProps.principalsBaseUrl;
        var data = {
          resource_id: this.props.resource.id,
          resource_type: this.props.resourceType,
          principal_id: selectedPrincipal.id,
          principal_type: selectedPrincipal.principal_type
        };

        this.performRequest(url, data, 'DELETE');
      }
    }
  }, {
    key: 'renderPermissionManagerModal',
    value: function renderPermissionManagerModal() {
      var component = [];
      component.push(_react2.default.createElement(_components.PermissionManagerModal, {
        ref: 'permissionManagerModal',
        title: this.props.title,
        resource: this.props.resource,
        resourceType: this.props.resourceType,
        principal: this.props.principal,
        principalType: this.props.principalType,
        principalsBaseUrl: this.props.urlProps.principalsBaseUrl,
        principalsPermissionsBaseUrl: this.props.urlProps.principalsPermissionsBaseUrl,
        updatePermissionsBaseUrl: this.props.urlProps.updatePermissionsBaseUrl,
        handleRemovePrincipal: this.handleRemovePrincipal,
        reloadPageAfterSubmit: this.props.reloadPageAfterSubmit
      }));

      return component;
    }
  }, {
    key: 'renderAddPrincipalsModal',
    value: function renderAddPrincipalsModal() {
      var component = [];
      if (!this.props.principal) {
        component.push(_react2.default.createElement(_components.AddPrincipalsModal, {
          potentialPrincipalsBaseUrl: this.props.urlProps.potentialPrincipalsBaseUrl,
          principalsTypeBaseUrl: this.props.urlProps.principalsTypeBaseUrl,
          handleAddPrincipal: this.handleAddPrincipal,
          resource: this.props.resource,
          resourceType: this.props.resourceType
        }));
      }

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          this.renderPermissionManagerModal(),
          this.renderAddPrincipalsModal()
        )
      );
    }
  }]);

  return AclModalsWrapper;
}(_react.Component), _class3.propTypes = {
  principal: _prop_types2.default.object,
  principalType: _prop_types2.default.string,
  resource: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  urlProps: _prop_types2.default.object,
  title: _prop_types2.default.string,
  reloadPageAfterSubmit: _prop_types2.default.bool
}, _class3.defaultProps = {
  principal: null,
  principalType: '',
  resource: null,
  resourceType: '',
  title: null,
  reloadPageAfterSubmit: false,
  urlProps: {
    principalsBaseUrl: '/wkm_acl_ui/principals',
    potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
    principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
    updatePermissionsBaseUrl: '/wkm_acl_ui/bulk_permissions',
    principalsPermissionsBaseUrl: '/wkm_acl_ui/principals/principals_permissions'

  }
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleAddPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleRemovePrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleRemovePrincipal'), _class2.prototype)), _class2)) || _class);
exports.default = AclModalsWrapper;