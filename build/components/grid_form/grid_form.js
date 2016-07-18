'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _findIndex2 = require('lodash/findIndex');

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _utils = require('../../utils');

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RestActionsMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(GridForm, _Component);

  function GridForm() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, GridForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(GridForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      formAction: 'create',
      selectedDataRow: null,
      selectedRowId: null,
      isLoading: _this.props.isLoading,
      clientSideData: []
    }, _this.handleResetClick = function (event) {
      var formRef = _this.refs.form;
      if (!(typeof formRef.haveNativeReset == "function" && !!formRef.haveNativeReset())) {
        _this.onReset(event);
      }
    }, _this.handleDestroy = function (data, status, xhr) {
      _this.props.onDestroySuccess(data, status, xhr);
      _this.loadGridData();
    }, _this.handleDestroyError = function (xhr, status, error) {
      _this.setState({ isLoading: false });
      _this.props.onDestroyError(xhr, status, error);
    }, _this.handleClientSideSubmit = function (event, postData) {
      event.preventDefault();

      var submittedDataRow = (0, _merge2.default)({}, postData);
      var submittedDataRowIndex = _this.findClientSideDataIndex(submittedDataRow[_this.props.clientSideIdField]);

      if (submittedDataRowIndex >= 0) {
        _this.state.clientSideData.splice(submittedDataRowIndex, 1, submittedDataRow);
      } else {
        submittedDataRow[_this.props.clientSideIdField] = _utils.uuid.v4();
        _this.state.clientSideData.push(submittedDataRow);
      }

      _this.setState({
        formAction: 'create',
        selectedRowId: null,
        selectedDataRow: null
      }, _this.props.onSuccess);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GridForm, [{
    key: 'renderForm',
    value: function renderForm() {
      if (this.props.readOnly) {
        return;
      }

      var formProps = (0, _merge2.default)({ style: 'filter' }, this.props.form, {
        action: this.getFormAction(),
        data: this.state.selectedDataRow,
        method: this.getFormMethod(),
        resource: !!this.props.clientSide ? null : this.props.form.resource,
        inputs: this.getFormInputs(),
        errors: this.props.errors,
        submitButton: this.getFormSubmitButton(),
        otherButtons: this.getFormOtherButtons(),
        onSubmit: this.onSubmit,
        onReset: this.onReset,
        onSuccess: this.onSuccess,
        onError: this.onError,
        key: "form_" + _utils.uuid.v4(),
        ref: "form"
      });

      return _react2.default.createElement(this.props.formComponent, formProps, null);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        _react2.default.createElement(
          'div',
          { className: this.className() + "__form" },
          this.renderForm()
        ),
        _react2.default.createElement(
          'div',
          { className: this.className() + "__grid" },
          _react2.default.createElement(Grid, _extends({}, this.getGridProps(), {
            actionButtons: this.getActionButtons(),
            ref: 'grid'
          }))
        )
      );
    }
  }, {
    key: 'getFormAction',
    value: function getFormAction() {
      if (!!this.props.clientSide) {
        return null;
      }

      return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
    }
  }, {
    key: 'getFormMethod',
    value: function getFormMethod() {
      return this.getRestActionMethod(this.state.formAction);
    }
  }, {
    key: 'getFormSubmitButton',
    value: function getFormSubmitButton() {
      if (this.state.formAction == 'create') {
        return this.props.createButton;
      } else if (this.state.formAction == 'update') {
        return this.props.updateButton;
      }

      return '';
    }
  }, {
    key: 'getFormOtherButtons',
    value: function getFormOtherButtons() {
      if (this.state.formAction == 'update') {
        var cancelButtonProps = _jquery2.default.extend({}, this.props.cancelButton, {
          type: "reset",
          onClick: this.handleResetClick
        });

        return [cancelButtonProps];
      }

      return [];
    }
  }, {
    key: 'getFormInputs',
    value: function getFormInputs() {
      var formInputs = this.props.form.inputs;
      if (!!this.props.clientSide) {
        formInputs[this.props.clientSideIdField] = { component: 'hidden' };
      }

      return formInputs;
    }
  }, {
    key: 'getActionButtons',
    value: function getActionButtons() {
      var actionButtons = this.props.actionButtons || {};

      if (!actionButtons.member) {
        actionButtons.member = this.getDefaultMemberActionButtons();
      }

      if (!actionButtons.collection) {
        actionButtons.collection = this.getDefaultCollectionActionButtons();
      }

      return actionButtons;
    }
  }, {
    key: 'getDefaultMemberActionButtons',
    value: function getDefaultMemberActionButtons() {
      if (this.props.readOnly) {
        return [];
      }

      return [this.getDefaultEditActionProps(), this.getDefaultDestroyActionProps()];
    }
  }, {
    key: 'getDefaultCollectionActionButtons',
    value: function getDefaultCollectionActionButtons() {
      return [];
    }
  }, {
    key: 'getDefaultEditActionProps',
    value: function getDefaultEditActionProps() {
      return _jquery2.default.extend({}, {
        icon: 'edit',
        onClick: this.editAction
      }, this.props.editActionButton);
    }
  }, {
    key: 'getDefaultDestroyActionProps',
    value: function getDefaultDestroyActionProps() {
      return _jquery2.default.extend({}, {
        icon: 'destroy',
        onClick: this.destroyAction
      }, this.props.destroyActionButton);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(event, postData) {
      this.props.onSubmit(event, postData);
      if (!!this.props.clientSide) {
        this.handleClientSideSubmit(event, postData);
      }
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(data, status, xhr) {
      if (this.props.onSuccess(data, status, xhr)) {
        this.loadGridData();
        this.resetForm();
      }
    }
  }, {
    key: 'onError',
    value: function onError(xhr, status, error) {
      return this.props.onError(xhr, status, error);
    }
  }, {
    key: 'onReset',
    value: function onReset(event) {
      this.setState({
        formAction: 'create',
        selectedRowId: null,
        selectedDataRow: null
      });

      this.clearFormErrors();
      this.props.onReset(event);
    }
  }, {
    key: 'resetForm',
    value: function resetForm() {
      var formRef = this.refs.form;
      if (typeof formRef.reset == "function") {
        formRef.reset();
      }
    }
  }, {
    key: 'editAction',
    value: function editAction(event, id, data) {
      this.setState({
        formAction: 'update',
        selectedRowId: id,
        selectedDataRow: data
      });

      this.clearFormErrors();
    }
  }, {
    key: 'destroyAction',
    value: function destroyAction(event, id) {
      if (!!this.props.clientSide) {
        this.destroyActionClientSide(event, id);
      } else {
        this.destroyActionServerSide(event, id);
      }
    }
  }, {
    key: 'destroyActionServerSide',
    value: function destroyActionServerSide(event, id) {
      var destroyUrl = this.getRestActionUrl('destroy', id);
      var destroyMethod = this.getRestActionMethod('destroy');

      if (!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
        this.setState({ isLoading: true });
        this.resetForm();

        _jquery2.default.ajax({
          url: destroyUrl,
          method: destroyMethod,
          success: this.handleDestroy,
          error: this.handleDestroyError
        });
      }
    }
  }, {
    key: 'getGridProps',
    value: function getGridProps() {
      var gridProps = (0, _merge2.default)({}, this.propsWithoutCSS());
      if (!!this.props.clientSide) {
        (0, _merge2.default)(gridProps, {
          url: '',
          pagination: false,
          selectable: 'none',
          eagerLoad: false,
          key: _utils.uuid.v4(),
          dataRowIdField: this.props.clientSideIdField,
          data: {
            dataRows: this.state.clientSideData
          },
          sortConfigs: {
            sortable: false
          }
        });
      }

      return gridProps;
    }
  }, {
    key: 'destroyActionClientSide',
    value: function destroyActionClientSide(event, id) {
      var itemIndex = this.findClientSideDataIndex(id);

      this.state.clientSideData.splice(itemIndex, 1);
      this.forceUpdate(this.props.onDestroySuccess);
    }
  }, {
    key: 'findClientSideDataIndex',
    value: function findClientSideDataIndex(id) {
      return _findIndex(this.state.clientSideData, function (item) {
        return item[this.props.clientSideIdField] == id;
      }.bind(this));
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var gridRef = this.refs.grid;
      return gridRef.serialize();
    }
  }, {
    key: 'loadGridData',
    value: function loadGridData() {
      var gridRef = this.refs.grid;
      gridRef.loadData();
    }
  }, {
    key: 'clearFormErrors',
    value: function clearFormErrors() {
      var formRef = this.refs.form;
      if (typeof formRef.clearErrors == "function") {
        formRef.clearErrors();
      }
    }
  }]);

  return GridForm;
}(_react.Component), _class2.propTypes = {
  clientSide: _prop_types2.default.bool,
  clientSideIdField: _prop_types2.default.string,
  url: _prop_types2.default.string,
  paginationConfigs: _prop_types2.default.object,
  sortConfigs: _prop_types2.default.object,
  sortData: _prop_types2.default.object,
  filter: _prop_types2.default.object,
  columns: _prop_types2.default.object,
  data: _prop_types2.default.object,
  dataRowsParam: _prop_types2.default.string,
  countParam: _prop_types2.default.string,
  actionButtons: _prop_types2.default.object,
  form: _prop_types2.default.object,
  createButton: _prop_types2.default.object,
  updateButton: _prop_types2.default.object,
  cancelButton: _prop_types2.default.object,
  isLoading: _prop_types2.default.bool,
  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
  eagerLoad: _prop_types2.default.bool,
  readOnly: _prop_types2.default.bool,
  formComponent: _prop_types2.default.func,
  onSubmit: _prop_types2.default.func,
  onReset: _prop_types2.default.func,
  onSuccess: _prop_types2.default.func,
  onError: _prop_types2.default.func,
  onLoadSuccess: _prop_types2.default.func,
  onLoadError: _prop_types2.default.func,
  onDestroySuccess: _prop_types2.default.func,
  onDestroyError: _prop_types2.default.func
}, _class2.defaultProps = {
  clientSide: false,
  clientSideIdField: '_clientSideId',
  form: {},
  actionButtons: null,
  themeClassKey: 'gridForm',
  isLoading: false,
  createButton: {
    name: 'actions.add',
    icon: 'add'
  },
  updateButton: {
    name: 'actions.update',
    icon: 'edit'
  },
  cancelButton: {
    name: 'actions.cancel',
    style: 'cancel'
  },
  selectable: 'multiple',
  eagerLoad: true,
  readOnly: false,
  formComponent: _components.Form,
  onSubmit: function onSubmit(event, postData) {},
  onReset: function onReset(event) {},
  onSuccess: function onSuccess(data, status, xhr) {
    return true;
  },
  onError: function onError(xhr, status, error) {
    return true;
  },
  onLoadSuccess: function onLoadSuccess(data) {},
  onLoadError: function onLoadError(xhr, status, error) {},
  onDestroySuccess: function onDestroySuccess(data) {},
  onDestroyError: function onDestroyError(xhr, status, error) {}
}, _temp2)) || _class);
exports.default = GridForm;