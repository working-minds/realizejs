var TableActionButton = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    selectionContext: React.PropTypes.string,
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      selectedRowIds: [],
      allSelected: false,
      method: 'GET',
      conditionParams: null,
      disabled: false,
      selectionContext: 'none',
      component: null,
      conditionToShowActionButton: function(data) { return true }
    };
  },

  render: function() {
    return (
      <span>
        {this.renderButton()}
      </span>
    );
  },

  renderButton: function(){
    var component = [];
    if (this.props.conditionToShowActionButton(this.props.conditionParams))
      if(!!this.props.component){
        return React.createElement(eval(this.props.component), this.props)
      }else {
        component.push(<Button {...this.props} disabled={this.isDisabled()} href={this.actionButtonHref()}
                                               onClick={this.actionButtonClick} key={this.props.name}/>);
      }

    return component;
  },

  isDisabled: function() {
    var selectionContext = this.props.selectionContext;
    if (selectionContext === 'none') {
      return false;
    } else if (selectionContext === 'atLeastOne') {
      return (this.props.selectedRowIds.length === 0) ;
    }

    return false;
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
