var InputDatefilterBody = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object,
    cancelButton: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datefilter.body',
      options: [],
      selectedOptions: []
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderFromInput()}
        {this.renderToInput()}
        {this.renderUpdateButton()}
      </div>
    );
  },

  renderFromInput: function() {
    return (
      <div className="input-datefilter__filter">
        <Input
          component="datepicker"
          {...this.fromInputProps()}
        />
      </div>
    );
  },

  renderToInput: function() {
    return (
      <div className="input-datefilter__filter">
        <Input
          component="datepicker"
          {...this.toInputProps()}
        />
      </div>
    );
  },

  renderUpdateButton: function() {
    return (
      <div className="input-datefilter__buttons">
        <Button name="update" element="a" />
      </div>
    );
  },

  fromInputProps: function() {

  },

  toInputProps: function() {

  }


});