var Input = React.createClass({
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
      onChange: function(event) {
        return true;
      },
      component: 'text',
      componentMapping: function(component) {
        var mapping = {
          text: InputText,
          checkbox: InputCheckbox,
          select: InputSelect,
          hidden: InputHidden
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

  render: function() {
    if(this.props.component === 'hidden')
      return this.renderHiddenInput();
    else
      return this.renderVisibleInput();
  },

  renderVisibleInput: function() {
    return (
      <div className="input-field col l3 m4 s12">
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
    var componentInputProps = React.__spread({}, this.props, { name: componentInputName });

    return React.createElement(componentInputClass, componentInputProps);
  },

  labelValue: function() {
    return this.props.label || this.props.name;
  }
});
