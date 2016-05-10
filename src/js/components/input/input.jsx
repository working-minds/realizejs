var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Input = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
    value: React.PropTypes.any,
    component: React.PropTypes.string,
    formStyle: React.PropTypes.oneOf(['default', 'filter', 'oneLine']),
    data: React.PropTypes.object,
    errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    resource: React.PropTypes.string,
    scope: React.PropTypes.oneOf(['resource', 'global']),
    maxLength: React.PropTypes.number,
    renderLabel: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input',
      value: null,
      component: 'text',
      formStyle: 'default',
      data: {},
      errors: {},
      resource: null,
      scope: 'resource',
      maxLength: null,
      renderLabel: true
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  inputClassName: function() {
    var className = this.className();
    if(!this.props.className) {
      className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
    }

    return className;
  },

  render: function() {
    var renderFunction = 'render' + S(this.props.component).capitalize().s + 'Input';
    var renderLabel = this.props.renderLabel;
    
    if(this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else if(!renderLabel) {
      return this.renderInputWithoutLabel();
    } else {
      return this.renderInput();
    }
  },

  renderInput: function() {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderLabel()}
        {this.renderInputErrors()}
      </div>
    );
  },

  renderInputWithoutLabel: function() {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderInputErrors()}
      </div>
    );
  },

  renderAutocompleteInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderDatefilterInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderDatepickerInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderNumberInput: function(){
    return this.renderInputWithoutLabel();
  },

  renderSwitchInput: function(){
    return this.renderInputWithoutLabel();
  },

  renderFileInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderColorpickerInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderGridformInput: function() {
    return this.renderInputWithoutLabel();
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.getInputComponentClass(this.props.component);
    var isGrid = (componentInputClass === InputGridForm);

    var componentInputProps = React.__spread(this.propsWithoutCSS(), {
      originalId: this.props.id,
      originalName: this.props.name,
      id: this.getInputComponentId(),
      name: this.getInputComponentName(),
      errors: isGrid ? this.props.errors : this.getInputErrors(),
      value: this.getInputComponentValue(),
      maxLength: this.getMaxLength(),
      ref: "inputComponent"
    });

    return React.createElement(componentInputClass, componentInputProps);
  },

  renderLabel: function() {
    var inputValue = this.getInputComponentValue();
    var isActive = this.labelIsActive(inputValue);

    return (
      <Label {...this.propsWithoutCSS()} id={this.getInputComponentId()} active={isActive} />
    );
  },

  labelIsActive: function(inputValue) {
    if (this.props.component === 'checkbox')
      return false;

    return (inputValue !== null && inputValue !== undefined && String(inputValue).length > 0);
  },

  renderInputErrors: function() {
    return (<InputError errors={this.getInputErrors()} />);
  },

  getInputContainerId: function() {
    return "input__" + this.props.id;
  },

  getInputComponentClass: function(component) {
    var mapping = {
      text: InputText,
      autocomplete: InputAutocomplete,
      checkbox: InputCheckbox,
      colorpicker: InputColorpicker,
      datefilter: InputDatefilter,
      datepicker: InputDatepicker,
      number: InputNumber,
      file: InputFile,
      gridform: InputGridForm,
      hidden: InputHidden,
      password: InputPassword,
      select: InputSelect,
      switch: InputSwitch,
      textarea: InputTextarea,
      checkbox_group: InputCheckboxGroup,
      radio_group: InputRadioGroup,
      masked: InputMasked
    };

    return (mapping[component] || window[component] || component);
  },

  getInputComponentId: function() {
    var inputId = this.props.id;
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputId = this.props.resource + '_' + inputId;
    }

    return inputId;
  },

  getInputComponentName: function() {
    var inputName = (this.props.name || this.props.id);
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputName = this.props.resource + '[' + inputName + ']';
    }

    return inputName;
  },

  getInputComponentValue: function() {
    if(!!this.props.value) {
      return this.props.value;
    }

    var data = this.props.data || {};
    var dataValue = data[this.props.id];

    if(typeof dataValue === 'boolean') {
      dataValue = (dataValue ? 1 : 0);
    }

    return dataValue;
  },

  getMaxLength: function() {
    var acceptComponents = ['text', 'masked', 'number', 'textarea'];

    if (!!this.props.maxLength && (acceptComponents.indexOf(this.props.component) != -1)) {
      return this.props.maxLength;
    }
  },

  getInputErrors: function() {
    if(this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id])
      return this.props.errors[this.props.resource][this.props.id];
    return this.props.errors[this.props.id];
  },

  /* Serializer functions */

  getName: function() {
    return this.getInputComponentName();
  },

  getValue: function() {
    var inputComponentRef = this.refs.inputComponent;
    if(typeof inputComponentRef.getValue == "function") {
      return inputComponentRef.getValue();
    } else {
      return this.getInputComponentValue();
    }
  },

  serialize: function() {
    var inputComponentRef = this.refs.inputComponent;
    if(typeof inputComponentRef.serialize == "function") {
      return inputComponentRef.serialize();
    }

    var serializedInput = {};
    serializedInput[this.getName()] = this.getValue();
    return serializedInput;
  }
});
