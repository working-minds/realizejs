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

var AddPrincipalsModal = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(AddPrincipalsModal, _Component);

  function AddPrincipalsModal() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, AddPrincipalsModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AddPrincipalsModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      selectedPrincipal: null,
      potentialPrincipals: [],
      principalType: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddPrincipalsModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _jquery2.default.ajax({
        url: this.props.principalsTypeBaseUrl,
        method: 'GET',
        dataType: 'json',
        success: function success(data) {
          _this2.setState({
            principalType: data[0].name
          });
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.refs.grid.backToInitialState();
    }
  }, {
    key: 'getData',
    value: function getData() {
      return {
        dataRows: this.state.potentialPrincipals,
        count: this.state.potentialPrincipals.length
      };
    }
  }, {
    key: 'getSelectedDatas',
    value: function getSelectedDatas() {
      var selectedRowsIds = this.refs.grid.state.selectedRowIds;
      var dataRows = this.refs.grid.state.dataRows;
      var selectedDatas = [];

      selectedRowsIds.forEach(function (rowId) {
        dataRows.forEach(function (data) {
          if (data.id === rowId) {
            selectedDatas.push({
              principal_id: data.id,
              principal_type: data.principal_type
            });
          }
        });
      });

      return selectedDatas;
    }
  }, {
    key: 'addPrincipal',
    value: function addPrincipal(selectedDatas) {
      this.props.handleAddPrincipal(selectedDatas);
    }
  }, {
    key: 'filters',
    value: function filters() {
      return {
        resource: 'q',
        inputs: {
          name_cont: {
            label: 'Nome',
            className: 'col s12 l6 m6'
          },
          principal_type: {
            label: 'Tipo',
            component: 'autocomplete',
            optionsUrl: this.props.principalsTypeBaseUrl,
            searchParam: 'principal_type',
            className: 'col s12 l6 m6',
            scope: 'global'
          },
          resource_id: {
            value: this.props.resource.id,
            component: 'hidden',
            scope: 'global'
          },
          resource_type: {
            value: this.props.resourceType,
            component: 'hidden',
            scope: 'global'
          },
          per_page: {
            value: 10,
            component: 'hidden',
            scope: 'global'
          }
        }
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
    key: 'handleAddPrincipal',
    value: function handleAddPrincipal() {
      var selectedDatas = this.getSelectedDatas();
      if (selectedDatas.length === 0) {
        alert('Necessário selecionar alguém para adicionar');
      } else {
        this.addPrincipal(selectedDatas);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.Modal,
        {
          id: this.props.modalId,
          style: { 'z-index': '9000' },
          className: this.props.className,
          headerSize: this.props.headerSize,
          ref: 'add-principals-modal'
        },
        _react2.default.createElement(
          _components.ModalHeader,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Selecionar Usuário/Grupo'
          )
        ),
        _react2.default.createElement(
          _components.ModalContent,
          null,
          _react2.default.createElement(
            'div',
            { className: 'principal-modal-content' },
            _react2.default.createElement(_components.Grid, _extends({
              ref: 'grid'
            }, this.props.gridProps, {
              url: this.props.potentialPrincipalsBaseUrl,
              filter: this.filters(),
              eagerLoad: true,
              onClickRow: this.handleSelectPrincipal
            }))
          )
        ),
        _react2.default.createElement(
          _components.ModalFooter,
          null,
          _react2.default.createElement(
            'div',
            { className: 'modal-footer', style: { float: 'right' } },
            _react2.default.createElement(_components.CloseModalButton, { modalId: this.props.modalId }),
            _react2.default.createElement(_components.Button, {
              name: 'Adicionar',
              element: 'a',
              onClick: this.handleAddPrincipal
            })
          )
        )
      );
    }
  }]);

  return AddPrincipalsModal;
}(_react.Component), _class3.propTypes = {
  resource: _prop_types2.default.object,
  resourceType: _prop_types2.default.string,
  className: _prop_types2.default.string,
  modalId: _prop_types2.default.string,
  potentialPrincipalsBaseUrl: _prop_types2.default.string,
  principalsTypeBaseUrl: _prop_types2.default.string
}, _class3.defaultProps = {
  className: 'add-principals-modal',
  modalId: 'add-principals-modal',
  potentialPrincipalsBaseUrl: '/wkm_acl_ui/principals/potential_principals',
  principalsTypeBaseUrl: '/wkm_acl_ui/principals/types',
  gridProps: {
    selectable: true,
    paginationOnTop: false,
    paginationConfigs: {
      perPage: 10,
      window: 4,
      param: 'p'
    },
    columns: {
      name: {
        label: 'Nome'
      },
      principal_type_translated: {
        label: 'Tipo'
      }
    },
    tableClassName: 'table bordered',
    actionButtons: {
      member: [],
      collection: []
    }
  }
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleSelectPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectPrincipal'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleAddPrincipal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleAddPrincipal'), _class2.prototype)), _class2)) || _class);
exports.default = AddPrincipalsModal;