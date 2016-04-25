import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import PropTypes from 'prop_types';
import $ from 'jquery';

import {
  ModalHeader,
  ModalContent,
  ModalFooter
} from 'components/modal';

import {
  CssClassMixin,
  ContainerMixin
} from 'mixins';

import { ModalStore } from 'stores';

@mixin(
  Reflux.connect(ModalStore, 'modalStore'),
  CssClassMixin,
  ContainerMixin
)
export default class Modal extends Component {
  static propTypes = {
    id: PropTypes.string,
    opened: PropTypes.bool,
    marginHeaderFooter: PropTypes.number,
    width: PropTypes.string,
    minContentHeight: PropTypes.number,
    useAvailableHeight: PropTypes.bool,

    dismissible: PropTypes.bool,
    opacity: PropTypes.number,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    ready: PropTypes.func,
    complete: PropTypes.func
  };

  static defaultProps = {
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

  state = {
    modalStore: null
  };

  componentDidMount () {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if(!!this.props.opened) {
      this.open();
    }
  }

  componentWillUnmount () {
    $(window).off('resize', this.resizeContent);
  }

  componentDidUpdate () {
    this.resizeContent();
    if(!!this.state.opened) {
      this.open();
    }

    if(this.state.modalStore) {
      this.handleModalStoreState();
    }
  }

  renderHeader () {
    return (
      <div ref="headerContainer" className="modal-header-container">
        {this.filterChildren(ModalHeader)}
      </div>
    );
  }

  renderContent () {
    return (
      <div ref="contentContainer" className="modal-content-container">
        {this.filterChildren(ModalContent)}
      </div>
    );
  }

  renderFooter () {
    return (
      <div ref="footerContainer" className="modal-footer-container">
        {this.filterChildren(ModalFooter)}
      </div>
    );
  }

  render () {
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
  }

  handleModalStoreState () {
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
  }

  open (options) {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.openModal({
      dismissible: this.props.dismissible,  // Modal can be dismissed by clicking outside of the modal
      opacity: this.props.opacity,          // Opacity of modal background
      inDuration: this.props.inDuration,    // Transition in duration
      outDuration: this.props.outDuration,  // Transition out duration
      ready: this.handleReady,              // Callback for Modal open
      complete: this.props.complete         // Callback for Modal close
    });
  }

  handleReady () {
    this.resizeContent();
    ModalActions.openFinished();

    if(typeof this.props.ready === "function") {
      this.props.ready();
    }
  }

  close () {
    var $modal = $(ReactDOM.findDOMNode(this.refs.modal));

    $modal.closeModal();
  }

  resizeContent () {
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
  }

  getAvailableHeight () {
    var headerContainer = ReactDOM.findDOMNode(this.refs.headerContainer);
    var footerContainer = ReactDOM.findDOMNode(this.refs.footerContainer);

    return ($(window).height() - (this.props.marginHeaderFooter)) - ($(headerContainer).height() + $(footerContainer).height());
  }

  getContentHeight () {
    var contentContainer = ReactDOM.findDOMNode(this.refs.contentContainer);
    var minContentHeight = this.props.minContentHeight;
    var contentHeight = 0;

    $(contentContainer).find("> *").each(function(i, content) {
      contentHeight += $(content).outerHeight();
    });


    return Math.max(minContentHeight, contentHeight);
  }
}
