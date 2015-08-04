var InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker'
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    $(inputNode).pickadate({
      selectMonths: true,
      selectYears: 15,
      format: 'dd/mm/yyyy'
    });
  },

  render: function() {
    return (
      <input {...this.props} type="date" className={this.className()} ref="input" />
    );
  }
});
