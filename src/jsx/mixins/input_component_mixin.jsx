var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      onChange: function(event) {
        return true;
      }
    };
  },

  focus: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    if(!!inputNode) {
      inputNode.focus();
    }
  }
};