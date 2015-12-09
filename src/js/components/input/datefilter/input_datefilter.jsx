var InputDatefilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      id: '',
      name: '',
      themeClassKey: 'input.datefilter',
      disabled: false,
      fromFilterInput: {},
      toFilterInput: {},
      okButton: {
        name: 'actions.ok'
      },
      cancelButton: {
        name: 'actions.cancel',
        style: 'cancel'
      }
    };
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          onFocus={this.showFilterBody}
        />

        <InputDatefilterBody
          {...this.propsWithoutCSS()}
          ref="body"
        />
      </div>
    );
  },

  showFilterBody: function(event) {
    if(this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    $bodyNode.show();
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
  }


});


