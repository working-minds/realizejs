var Modal = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    id:React.PropTypes.string,
    headerSize:React.PropTypes.integer,
    footerSize:React.PropTypes.integer,
    marginHedaerFooter:React.PropTypes.integer
  },

  getDefaultProps: function() {
    return {
      headerSize:50,
      footerSize:50,
      marginHedaerFooter:100
    }
  },

  headerConfig: function () {
    return {
      height: this.props.headerSize + "px",
      overflow: 'hidden'
    }
  },

  contentConfig: function () {
    return {
      overflow: 'auto',
      'overflow-y': 'scroll'
    }
  },

  footerConfig: function () {
    return {
      height: this.props.footerSize + "px",
      overflow: 'hidden'
    }
  },

  render: function() {
    var header = this.filterChildren('header')? this.renderHeader() : '';
    var footer = this.filterChildren('footer')? this.renderFooter() : '';
    return (
      <div id={this.props.id} className={this.themeStyle()} ref="modal">
        {header}
        {this.renderContent()}
        {footer}
      </div>
    );
  },

  renderHeader: function(){
    return (
      <div ref="headerContainer" style={this.headerConfig()}>
        {this.filterChildren('header')}
      </div>
    );
  },

  renderContent: function(){
    return (
      <div ref="contentContainer" style={this.contentConfig()}>
        {this.filterChildren('content')}
      </div>
    );
  },

  renderFooter: function(){
    return (
      <div ref="footerContainer" style={this.footerConfig()}>
        {this.filterChildren('footer')}
      </div>
    );
  },

  componentDidMount: function(){
    this.resizeAll();
    $(window).bind('resize',this.resizeAll);
  },

  resizeAll: function(){
    this.resizeModal();
    this.resizeContent();
  },

  resizeModal: function(){
    var modal = React.findDOMNode(this.refs.modal);
    $(modal).css("height", $(window).height() - (this.props.marginHedaerFooter) );
  },

  resizeContent: function(){
    var contentContainer = React.findDOMNode(this.refs.contentContainer);
    $(contentContainer).css("height", $(window).height() - (this.props.marginHedaerFooter) - (this.props.headerSize+ this.props.footerSize) );
  },

  themeStyle: function(){
    var className = 'card wkm-modal '+this.props.className;
    return className;
  },

  filterChildren : function(area) {
    var result = null;
    React.Children.map(this.props.children, function(x) {
      if (x.props.area == area)
        result =  x;
    });
    return result;
  }
});





