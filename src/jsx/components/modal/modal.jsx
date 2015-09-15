var Modal = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    id: React.PropTypes.string,
    opened: React.PropTypes.bool,
    headerSize: React.PropTypes.number,
    footerSize: React.PropTypes.number,
    marginHeaderFooter:React.PropTypes.number,
    width: React.PropTypes.string,
    modalHeight: React.PropTypes.number,
    headerHeight: React.PropTypes.number,
    contentHeight: React.PropTypes.number,
    footerHeight: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      opened: false,
      headerSize: 50,
      footerSize: 50,
      marginHeaderFooter: 100,
      width: '60%',
      modalHeight: 0,
      headerHeight: 0,
      contentHeight: 0,
      footerHeight: 0,
      themeClassKey: 'modal'
    };
  },

  componentDidMount: function() {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if(!!this.props.opened) {
      this.openModal();
    }
  },

  componentDidUnmount: function() {
    $(window).off('resize', this.resizeContent);
  },

  componentDidUpdate: function() {
    this.resizeContent();
  },

  render: function() {
    var header = this.filterChildren(ModalHeader)? this.renderHeader() : '';
    var content = this.filterChildren(ModalContent)? this.renderContent() : '';
    var footer = this.filterChildren(ModalFooter)? this.renderFooter() : '';

    if(header == '' && content == '' && footer == '')
      content = <ModalContent {...this.propTypes}>{this.props.children}</ModalContent>;

    return (
      <div id={this.props.id} className={this.className()} ref="modal">
        {header}
        {content}
        {footer}
      </div>
    );
  },

  renderHeader: function() {
    return (
      <div ref="headerContainer" className="modal-header-container">
        {this.filterChildren(ModalHeader)}
      </div>
    );
  },

  renderContent: function() {
    return (
      <div ref="contentContainer" className="modal-content-container">
        {this.filterChildren(ModalContent)}
      </div>
    );
  },

  renderFooter: function() {
    return (
      <div ref="footerContainer" className="modal-footer-container">
        {this.filterChildren(ModalFooter)}
      </div>
    );
  },

  openModal: function() {
    var $modal = $(React.findDOMNode(this.refs.modal));

    $modal.openModal({
      ready: this.resizeContent
    });
  },

  resizeContent: function() {
    var modal = React.findDOMNode(this.refs.modal);
    var contentContainer = React.findDOMNode(this.refs.contentContainer);

    $(modal).css("max-height", $(window).height() - (this.props.marginHeaderFooter));
    $(modal).css("width", this.props.width);

    var availableHeight = this.getAvailableHeight();
    var contentHeight = this.getContentHeight();

    $(contentContainer).css("height", Math.min(availableHeight, contentHeight));
    if(contentHeight > availableHeight) {
      $(contentContainer).css("overflow-y", "auto");
    }
  },

  getAvailableHeight: function() {
    var headerContainer = React.findDOMNode(this.refs.headerContainer);
    var footerContainer = React.findDOMNode(this.refs.footerContainer);

    return ($(window).height() - (this.props.marginHeaderFooter)) - ($(headerContainer).height() + $(footerContainer).height());
  },

  getContentHeight: function() {
    var contentContainer = React.findDOMNode(this.refs.contentContainer);
    var contentHeight = 0;
    $(contentContainer).find("> *").each(function(i, content) {
      contentHeight += $(content).outerHeight();
    });

    return contentHeight;
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









