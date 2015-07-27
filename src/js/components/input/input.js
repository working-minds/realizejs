var Input = React.createClass({displayName: "Input",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    component: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      component: 'text',
      value: null
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  componentWillMount: function() {
    if(!this.props.name) {
      this.props.name = this.props.id;
    }
  },

  render: function() {
    return (
      React.createElement("div", {className: "input-field col l3 m4 s12"}, 
        this.renderComponentInput(), 
        React.createElement("label", {htmlFor: this.props.id}, this.labelValue())
      )
    );
  },

  renderComponentInput: function() {
    var componentMapping = {
      text: React.createElement(InputText, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange})),
      checkbox: React.createElement(InputCheckbox, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange})),
      select: React.createElement(InputSelect, React.__spread({},  this.props, {value: this.state.value, onChange: this.onChange}))
    };

    return componentMapping[this.props.component];
  },

  labelValue: function() {
    var label = this.props.label;
    if(!label) {
      label = this.props.name;
    }

    return label;
  },

  onChange: function(event) {
    target = event.currentTarget;
    var value = target.value;

    this.setState({
      value: value
    });
  }
});
