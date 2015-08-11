var Input = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    formStyle: React.PropTypes.string,
    onChange: React.PropTypes.func,
    component: React.PropTypes.string,
    componentMapping: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      component: 'text',
      formStyle: 'default',
      errors: [],
      onChange: function(event) {
        return true;
      },
      componentMapping: function(component) {
        var mapping = {
          text: InputText,
          autocomplete: InputAutocomplete,
          checkbox: InputCheckbox,
          datepicker: InputDatepicker,
          hidden: InputHidden,
          password: InputPassword,
          select: InputSelect,
          textarea: InputTextarea,
          checkbox_group: InputCheckboxGroup
        };

        return mapping[component];
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value,
      themeClassKey: this.themeClassKeyByStyle()
    };
  },

  themeClassKeyByStyle: function() {
    return 'input.wrapper.' + this.props.formStyle;
  },

  render: function() {
    var renderFunction = 'render' + S(this.props.component).capitalize().s + 'Input';
    if(this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else {
      return this.renderInput();
    }
  },

  renderInput: function() {
    return (
      <div className={this.className()}>
        {this.renderComponentInput()}
        <Label {...this.propsWithoutCSS()} />
        <InputError {...this.propsWithoutCSS()} />
      </div>
    );
  },

  renderAutocompleteInput: function() {
    return (
      <div className={this.className()}>
        {this.renderComponentInput()}
        <InputError {...this.propsWithoutCSS()} />
      </div>
    );
  },

  renderDatepickerInput: function() {
    return (
      <div className={this.className()}>
        {this.renderComponentInput()}
        <InputError {...this.propsWithoutCSS()} />
      </div>
    );
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.props.componentMapping(this.props.component);
    var componentInputName = this.props.name || this.props.id;
    var componentInputProps = React.__spread({}, this.propsWithoutCSS(), { name: componentInputName, ref: "inputComponent" });

    return React.createElement(componentInputClass, componentInputProps);
  }
});
