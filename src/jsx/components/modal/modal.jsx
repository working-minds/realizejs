var Modal = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    id: React.PropTypes.string,
    headerSize:React.PropTypes.number,
    footerSize:React.PropTypes.number,
    marginHeaderFooter:React.PropTypes.number,
    width: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      headerSize:50,
      footerSize:50,
      marginHeaderFooter:100,
      width: '60%',
      modalHeight: 0,
      headerHeight: 0,
      contentHeight: 0,
      footerHeight: 0
    };
  },

  render: function() {
    var header = this.filterChildren(ModalHeader)? this.renderHeader() : '';
    var content = this.filterChildren(ModalContent)? this.renderContent() : '';
    var footer = this.filterChildren(ModalFooter)? this.renderFooter() : '';

    if(header == '' && content == '' && footer == '')
      content = <ModalContent {...this.propTypes}>{this.props.children}</ModalContent>

    return (
      <div id={this.props.id} className={this.themeStyle()} ref="modal">
        {header}
        {content}
        {footer}
      </div>
    );
  },

  renderHeader: function(){
    return (
      <div ref="headerContainer" >
        {this.filterChildren(ModalHeader)}
      </div>
    );
  },

  renderContent: function(){
    return (
      <div ref="contentContainer" >
        {this.filterChildren(ModalContent)}
      </div>
    );
  },

  renderFooter: function(){
    return (
      <div ref="footerContainer" >
        {this.filterChildren(ModalFooter)}
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

  resizeContent: function(){
    var modal = React.findDOMNode(this.refs.modal);
    var headerContainer = React.findDOMNode(this.refs.headerContainer);
    var contentContainer = React.findDOMNode(this.refs.contentContainer);
    var footerContainer = React.findDOMNode(this.refs.footerContainer);

    $(modal).css("max-height", $(window).height() - (this.props.marginHeaderFooter) );
    $(modal).css("width", this.props.width);

    var maxHeightModal = $(window).height() - (this.props.marginHeaderFooter);
    var possibleContentHeight = maxHeightModal - ($(headerContainer).height() + $(footerContainer).height());

    if ($(contentContainer).height() >= possibleContentHeight){
      $(contentContainer).css("height", $(modal).height() - ($(headerContainer).height() + $(footerContainer).height()));
      $(contentContainer).css("overflow-y","auto");
    }else{
      $(contentContainer).removeAttr('style');
    }

  },

  resizeModal: function(){
    var contentContainer = React.findDOMNode(this.refs.contentContainer);
    $(contentContainer).css("max-height", $(window).height() - (this.props.marginHeaderFooter) - (this.props.headerSize+ this.props.footerSize) );
  },

  themeStyle: function(){
    var className = 'card wkm-modal '+this.props.className;
    return className;
  },

  filterChildren : function(area) {
    var result = null;
    React.Children.map(this.props.children, function(x) {
      if (x.type == area)
        result =  x;
    });
    return result;
  }
});









