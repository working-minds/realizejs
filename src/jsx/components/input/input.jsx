var Input = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    component: React.PropTypes.string,
    componentMapping: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      component: 'text',
      themeClassKey: 'input.wrapper',
      onChange: function(event) {
        return true;
      },
      componentMapping: function(component) {
        var mapping = {
          text: InputText,
          checkbox: InputCheckbox,
          select: InputSelect,
          hidden: InputHidden,
          password: InputPassword
        };

        return mapping[component];
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  focus: function() {
    var inputComponentRef = this.refs.inputComponent;
    inputComponentRef.focus();
  },

  render: function() {
    if(this.props.component === 'hidden')
      return this.renderHiddenInput();
    else
      return this.renderVisibleInput();
  },

  renderVisibleInput: function() {
    return (
      <div className={this.className()}>
        {this.renderComponentInput()}
        <label htmlFor={this.props.id}>{this.labelValue()}</label>
      </div>
    );
  },

  renderHiddenInput: function() {
    return this.renderComponentInput();
  },

  renderComponentInput: function() {
    var componentInputClass = this.props.componentMapping(this.props.component);
    var componentInputName = this.props.name || this.props.id;
    var componentInputProps = React.__spread({}, this.props, { name: componentInputName, ref: "inputComponent" });

    return React.createElement(componentInputClass, componentInputProps);
  },

  labelValue: function() {
    return this.props.label || this.props.name;
  }
});
