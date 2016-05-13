var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

var _merge = require('lodash/merge');
var _mapValues = require('lodash/mapValues');

window.InputGridForm = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  propTypes: {
    label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
    fields: React.PropTypes.object,
    form: React.PropTypes.object,
    clientSide: React.PropTypes.bool,
    inputWrapperComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element, React.PropTypes.string]),
    onSuccess: React.PropTypes.func,
    onDestroySuccess: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.gridForm',
      className: '',
      fields: {},
      form: {},
      clientSide: true,
      inputWrapperComponent: null,
      onSuccess: function() {},
      onDestroySuccess: function() {}
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderLabel()}
        <GridForm
          {...this.propsWithoutCSS()}
          formComponent={InputGridFormFields}
          form={this.parseFormProp()}
          columns={this.parseColumnsProp()}
          onSuccess={this.handleOnSuccess}
          onDestroySuccess={this.handleOnDestroySuccess}
          errors={this.props.errors}
          ref="gridForm"
        />
        <InputHidden
          {...this.propsWithoutCSS()}
          value={this._getValue()}
          ref="input"
        />
      </div>
    );
  },

  renderLabel: function() {
    var label = this.props.label;
    if(typeof label == "boolean" && !label) {
      return [];
    }

    return (
      <h3 className={this.themedClassName("input.gridForm.label")}>
        {label}
      </h3>
    );
  },

  /* GridForm Props parsers */

  getDefaultFormProps: function() {
    return {
      formStyle: 'filter',
      inputWrapperComponent: this.props.inputWrapperComponent
    };
  },

  parseFormProp: function() {
    var formProp = _merge(this.getDefaultFormProps(), this.props.form);
    var fieldsProp = _merge({}, this.props.fields);
    formProp.inputs = _mapValues(fieldsProp, function(field) {
      delete field.format;
      return field;
    });

    return formProp;
  },

  parseColumnsProp: function() {
    var columnsProp = _merge({}, this.props.fields);
    columnsProp = _mapValues(columnsProp, function(column, columnKey) {
      delete column.component;
      delete column.className;
      delete column.value;
      column.name = this.getColumnName(column, columnKey);
      return column;
    }.bind(this));

    return columnsProp;
  },

  getColumnName: function(column, columnKey) {
    var columnName = column.name || columnKey;
    if(this.columnHaveDisplayValueKey(columnName)) {
      columnName += "Display";
    }

    return columnName;
  },

  columnHaveDisplayValueKey: function(columnName) {
    var value = this.state.value;
    var firstValueRow = value == null ? null : value[0];
    if(firstValueRow == null) {
      return false;
    }

    var valueKeys = Object.keys(firstValueRow);
    return valueKeys.indexOf(columnName + "Display") >= 0;
  },

  /* Event handling functions */

  handleOnSuccess: function() {
    let gridFormValue = this.refs.gridForm.serialize();

    this.props.onSuccess(gridFormValue);
    this.serializeGridForm();
  },

  handleOnDestroySuccess: function() {
    let gridFormValue = this.refs.gridForm.serialize();

    this.props.onDestroySuccess(gridFormValue);
    this.serializeGridForm();
  },

  /* GridForm Result serializer */

  serializeGridForm: function() {
    var gridFormRef = this.refs.gridForm;
    this.setState({
      value: gridFormRef.serialize()
    });
  },

  _getValue: function() {
    return JSON.stringify(this.state.value);
  }
});
