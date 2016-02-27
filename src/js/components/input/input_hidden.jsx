var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputHidden = React.createClass({
  mixins: [InputComponentMixin],

  render: function() {
    return (
      <input {...this.props} type="hidden" ref="input" />
    );
  }
});
