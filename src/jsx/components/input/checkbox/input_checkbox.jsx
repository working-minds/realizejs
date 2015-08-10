var InputCheckbox = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool,
    isChecked:React.PropTypes.boolean
  },

  getInitialState: function() {
    return {
      isChecked: false
    };
  },

  handleChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      renderAsIndeterminate: false
    };
  },

  componentWillMount: function() {
    this.state.isChecked = this.props.isChecked || this.state.isChecked;
  },

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
      <input {...this.props} type="checkbox" className={this.className()} ref="input" onChange={this.handleChange} checked={this.state.isChecked }/>
    );
  }


});
