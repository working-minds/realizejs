var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

var _merge = require('lodash/merge');
var _mapValues = require('lodash/mapValues');

window.InputGridForm = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
    fields: React.PropTypes.object,
    form: React.PropTypes.object,
    clientSide: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.gridForm',
      className: 'col l12 m12 s12',
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

  parseFormProp: function() {
    var formProp = this.props.form;
    var fieldsProp = _merge({}, this.props.fields);
    formProp.formStyle = 'filter';
    formProp.inputs = _mapValues(fieldsProp, function(field) {
      delete field.format;
      return field;
    });

    return formProp;
  },

  parseColumnsProp: function() {
    var columnsProp = _merge({}, this.props.fields);
    columnsProp = _mapValues(columnsProp, function(column) {
      delete column.component;
      return column;
    });

    return columnsProp;
  }
});