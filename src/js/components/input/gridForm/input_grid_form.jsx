var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');

var _merge = require('lodash/merge');
var _mapValues = require('lodash/mapValues');

window.InputGridForm = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    ContainerMixin
  ],

  propTypes: {
    label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
    fields: React.PropTypes.object,
    form: React.PropTypes.object,
    clientSide: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.gridForm',
      className: '',
      fields: {},
      form: {},
      clientSide: true
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
          onSuccess={this.serializeGridForm}
          onDestroySuccess={this.serializeGridForm}
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
      formStyle: 'filter'
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

  propsToForward: function() {
    return ['resource', 'data', 'readOnly', 'disabled'];
  },

  propsToForwardMapping: function() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
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