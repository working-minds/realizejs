var TableActionButton = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      selectedRowIds: [],
      allSelected: false,
      method: 'GET'
    };
  },

  render: function() {
    return (
      <Button {...this.props} href={this.actionButtonHref()} onClick={this.actionButtonClick} />
    );
  },

  actionButtonHref: function() {
    var buttonHref = this.props.href;
    if(!buttonHref) {
      return '#!';
    }

    var selectedData = this.getSelectedData();
    return (buttonHref + '?' + $.param(selectedData));
  },

  actionButtonClick: function(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;
    var selectedData = this.getSelectedData();

    if($.isFunction(buttonOnClick)) {
      buttonOnClick(event, selectedData);
    } else if(!!buttonAction) {
      this.performRequest(buttonAction, selectedData, this.props.method);
    }
  },

  getSelectedData: function() {
    var selectedData = {};
    if(this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
      selectedData = this.props.allSelectedData;
    } else {
      selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
    }

    return selectedData;
  }
});
