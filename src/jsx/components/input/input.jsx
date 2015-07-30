var Input = React.createClass({
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

  render: function() {
    return (
      <div className="input-field col l3 m4 s12">
        {this.renderComponentInput()}
        <label htmlFor={this.props.id}>{this.labelValue()}</label>
      </div>
    );
  },

  renderComponentInput: function() {
    var componentMapping = {
      text: InputText,
      checkbox: InputCheckbox,
      select: InputSelect
    };

    return React.createElement(componentMapping[this.props.component],
                               React.__spread({}, this.props,
                                              {
                                                value: this.state.value,
                                                name: (this.props.name || this.props.id),
                                                onChange: this.onChange
                                              })
    );
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
