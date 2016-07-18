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

var _decorators = require('../../utils/decorators');

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

var IndexPermissions = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin, _mixins.ModalRendererMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(IndexPermissions, _Component);

  function IndexPermissions() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, IndexPermissions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IndexPermissions)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hasResource: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IndexPermissions, [{
    key: 'onSuccess',
    value: function onSuccess(responseData) {
      this.renderModalHtml(responseData);
    }
  }, {
    key: 'onLoadSuccess',
    value: function onLoadSuccess() {
      var dataRows = this.refs.grid.state.dataRows;
      if (dataRows.length === 0) {
        this.setState({
          hasResource: false
        });
      }
    }
  }, {
    key: 'getActionButtons',
    value: function getActionButtons() {
      var gridProps = this.props.gridProps;

      if (!!gridProps.actionButtons) {
        return gridProps.actionButtons;
      }

      return {
        member: [{
          icon: 'edit',
          onClick: this.openEditPermission
        }],
        collection: []
      };
    }
  }, {
    key: 'getColumns',
    value: function getColumns() {
      var gridProps = this.props.gridProps;

      if (!!gridProps.columns) {
        return gridProps.columns;
      }

      var resourceType = this.props.resourceType;
      return this.defaultColumns(resourceType);
    }
  }, {
    key: 'defaultColumns',
    value: function defaultColumns(resourceType) {
      return {
        resource_name: {
          label: I18n.t('models.' + resourceType)
        },
        permission: {
          label: 'Permissão',
          component: 'LabelPermission'
        }
      };
    }
  }, {
    key: 'filters',
    value: function filters() {
      return {
        resource: 'q',
        inputs: {
          principal_id: {
            value: this.props.principal.id,
            component: 'hidden',
            scope: 'global'
          },
          principal_type: {
            value: this.props.principalType,
            component: 'hidden',
            scope: 'global'
          },
          resource_type: {
            value: this.props.resourceType,
            component: 'hidden',
            scope: 'global'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var hasResource = this.state.hasResource;
      var display = hasResource ? 'block' : 'none';

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: { display: display } },
        _react2.default.createElement(_components.Grid, _extends({}, this.props.gridProps, {
          ref: 'grid',
          columns: this.getColumns(),
          filter: this.filters(),
          onLoadSuccess: this.onLoadSuccess,
          actionButtons: this.getActionButtons()
        }))
      );
    }
  }]);

  return IndexPermissions;
}(_react.Component), _class3.propTypes = {
  principal: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  gridProps: _prop_types2.default.object,
  className: _prop_types2.default.string,
  editPermissionBaseUrl: _prop_types2.default.object
}, _class3.defaultProps = {
  principal: null,
  principalType: null,
  resourceType: '',
  className: 'index-permissions',
  editPermissionBaseUrl: '/wkm_acl_ui/permission_managers',
  gridProps: {
    url: '/wkm_acl_ui/permissions',
    selectable: false,
    pagination: false,
    eagerLoad: true,
    tableClassName: 'table striped bordered'
  },
  editPermissionsProps: {
    url: null,
    actionCallback: null
  }
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'onLoadSuccess', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onLoadSuccess'), _class2.prototype)), _class2)) || _class);
exports.default = IndexPermissions;