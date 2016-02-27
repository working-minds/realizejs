var ModalStore = require('realize/stores/modal_store.js');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');

window.Modal = React.createClass({
  mixins: [
    Reflux.connect(ModalStore, 'modalStore'),
    CssClassMixin,
    ContainerMixin
  ],

  propTypes: {
    id: React.PropTypes.string,
    opened: React.PropTypes.bool,
    marginHeaderFooter: React.PropTypes.number,
    width: React.PropTypes.string,
    minContentHeight: React.PropTypes.number,
    useAvailableHeight: React.PropTypes.bool,

    dismissible: React.PropTypes.bool,
    opacity: React.PropTypes.number,
    inDuration: React.PropTypes.number,
    outDuration: React.PropTypes.number,
    ready: React.PropTypes.func,
    complete: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      id: '',
      themeClassKey: 'modal',
      opened: false,
      marginHeaderFooter: 100,
      width: '60%',
      minContentHeight: 0,
      useAvailableHeight: false,

      dismissible: true,
      opacity: 0.4,
      inDuration: 300,
      outDuration: 200,
      ready: function() { return true; },
      complete: function() { return true; }
    };
  },

  getInitialState: function() {
    return {
      modalStore: null
    };
  },

  /* Lifecycle functions */

  componentDidMount: function() {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if(!!this.props.opened) {
      this.open();
    }
  },

  componentWillUnmount: function() {
    $(window).off('resize', this.resizeContent);
  },

  componentDidUpdate: function() {
    this.resizeContent();
    if(!!this.state.opened) {
      this.open();
    }

    if(this.state.modalStore) {
      this.handleModalStoreState();
    }
  },

  handleModalStoreState: function() {
    var modalStore = this.state.modalStore;
    var shouldOpenModal = modalStore.shouldOpen;
    var shouldCloseModal = modalStore.shouldClose;
    var modalToOpenId = modalStore.modalId;

    if(modalToOpenId == this.props.id) {
      if(shouldOpenModal) {
        this.open();
      }

      if(shouldCloseModal) {
        this.close();
      }
    }

  },

  /* Rendering functions */

  render: function() {
    var header = this.filterChildren(ModalHeader)? this.renderHeader() : '';
    var content = this.filterChildren(ModalContent)? this.renderContent() : '';
    var footer = this.filterChildren(ModalFooter)? this.renderFooter() : '';

    if(header == '' && content == '' && footer == '')
      content = (<ModalContent {...this.props}>{this.props.children}</ModalContent>);

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

  /* Modal opener handlers */

  open: function(options) {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.openModal({
      dismissible: this.props.dismissible,  // Modal can be dismissed by clicking outside of the modal
      opacity: this.props.opacity,          // Opacity of modal background
      inDuration: this.props.inDuration,    // Transition in duration
      outDuration: this.props.outDuration,  // Transition out duration
      ready: this.handleReady,              // Callback for Modal open
      complete: this.props.complete         // Callback for Modal close
    });
  },

  handleReady: function() {
    this.resizeContent();
    ModalActions.openFinished();

    if(typeof this.props.ready === "function") {
      this.props.ready();
    }
  },

  /* Modal close handlers */

  close: function() {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.closeModal();
  },

  /* Modal resize handlers */

  resizeContent: function() {
    var modal = ReactDOM.findDOMNode(this.refs.modal);
    var contentContainer = ReactDOM.findDOMNode(this.refs.contentContainer);

    $(modal).css("max-height", $(window).height() - (this.props.marginHeaderFooter));
    $(modal).css("width", this.props.width);

    var availableHeight = this.getAvailableHeight();
    var contentHeight = this.getContentHeight();
    var containerHeight = 0;
    if(!!this.props.useAvailableHeight) {
      containerHeight = availableHeight;
    } else {
      containerHeight = Math.min(availableHeight, contentHeight);
    }

    $(contentContainer).css("height", containerHeight);
  },

  getAvailableHeight: function() {
    var headerContainer = ReactDOM.findDOMNode(this.refs.headerContainer);
    var footerContainer = ReactDOM.findDOMNode(this.refs.footerContainer);

    return ($(window).height() - (this.props.marginHeaderFooter)) - ($(headerContainer).height() + $(footerContainer).height());
  },

  getContentHeight: function() {
    var contentContainer = ReactDOM.findDOMNode(this.refs.contentContainer);
    var minContentHeight = this.props.minContentHeight;
    var contentHeight = 0;

    $(contentContainer).find("> *").each(function(i, content) {
      contentHeight += $(content).outerHeight();
    });


    return Math.max(minContentHeight, contentHeight);
  }

});









