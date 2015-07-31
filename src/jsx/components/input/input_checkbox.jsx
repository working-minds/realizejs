var InputCheckbox = React.createClass({
  mixins: [InputComponentMixin],

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = true;
  },

  render: function() {
    return (
      <input {...this.props} type="checkbox" ref="input" className="validate" />
    );
  }
});
