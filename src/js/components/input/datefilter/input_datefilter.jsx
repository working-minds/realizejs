var InputDatefilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datefilter',
      disabled: false
    };
  },

  getInitialState: function() {
    return {
      selectedDates: []
    }
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          selectedDates={this.state.selectedDates}
          onFocus={this.showFilterBody}
        />

        <InputDatefilterBody
          {...this.propsWithoutCSS()}
          onSelectDate={this.handleSelectDate}
          ref="body"
        />
      </div>
    );
  },

  /* Input focus handlers */

  showFilterBody: function(event) {
    if(this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    var firstFilterInput = $bodyNode.find('input[type=text]')[0];

    $bodyNode.show();
    firstFilterInput.focus();
  },

  hideResult: function() {
    $(document).off('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    $bodyNode.hide();
  },

  handleDocumentClick: function(event) {
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    if($containerNode.find(event.target).length === 0) {
      this.hideResult();
    }
  },

  /* Date selection handlers */

  handleSelectDate: function(selectedDates) {

  }

});


