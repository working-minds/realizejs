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
      width: '40%'
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

  resizeModal: function(){
    var modal = React.findDOMNode(this.refs.modal);
    $(modal).css("max-height", $(window).height() - (this.props.marginHeaderFooter) );
    $(modal).css("width", this.props.width);
  },

  resizeContent: function(){
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

var ModalHeader = React.createClass({
  mixins: [CssClassMixin],
  render: function() {
    var content = this.props.children;
    if (this.props.clearTheme == false)
      content = <div className="card-content">{this.props.children}</div>;
    return content;
  }
});

var ModalContent  = React.createClass({
  mixins: [CssClassMixin],
  render: function() {
    var content = this.props.children;
    if (this.props.clearTheme == false)
      content = <div className="card-content">{this.props.children}</div>;
    return content;
  }
});

var ModalFooter = React.createClass({
  mixins: [CssClassMixin],
  render: function() {
    var content = this.props.children;
    if (this.props.clearTheme == false)
      content = <div className="card-content">{this.props.children}</div>;
    return content;
  }
});




