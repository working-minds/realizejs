import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../utils/decorators';

import ModalHeader from './modal_header';
import ModalContent from './modal_content';
import ModalFooter from './modal_footer';

import ModalActions from '../../actions/modal_actions';

import {
  CssClassMixin,
  ContainerMixin,
} from '../../mixins';

import { ModalStore } from '../../stores';
const ModalStoreMixin = Reflux.connect(ModalStore, 'modalStore');

@mixin(
  ModalStoreMixin,
  CssClassMixin,
  ContainerMixin,
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
    complete: PropTypes.func,

    children: PropTypes.component,
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
    ready() { return true; },
    complete() { return true; },
  };

  state = {
    modalStore: null,
  };

  componentDidMount() {
    this.resizeContent();
    $(window).on('resize', this.resizeContent);

    if (!!this.props.opened) {
      this.open();
    }
  }

  componentWillUnmount() {
    $(window).off('resize', this.resizeContent);
  }

  componentDidUpdate() {
    this.resizeContent();
    if (!!this.state.opened) {
      this.open();
    }

    if (this.state.modalStore) {
      this.handleModalStoreState();
    }
  }

  renderHeader() {
    return (
      <div ref={ref => { this.headerContainer = ref; }} className="modal-header-container">
        {this.filterChildren(ModalHeader)}
      </div>
    );
  }

  renderContent() {
    return (
      <div ref={ref => { this.contentContainer = ref; }} className="modal-content-container">
        {this.filterChildren(ModalContent)}
      </div>
    );
  }

  renderFooter() {
    return (
      <div ref={ref => { this.footerContainer = ref; }} className="modal-footer-container">
        {this.filterChildren(ModalFooter)}
      </div>
    );
  }

  render() {
    const header = this.filterChildren(ModalHeader) ? this.renderHeader() : '';
    const content = this.filterChildren(ModalContent) ? this.renderContent() : '';
    const footer = this.filterChildren(ModalFooter) ? this.renderFooter() : '';

    const rootProps = {
      id: this.props.id,
      className: this.className(),
      ref: 'modal',
    };

    if (header === '' && content === '' && footer === '') {
      return (
        <div {...rootProps}>
          <ModalContent {...this.props}>{this.props.children}</ModalContent>
        </div>
      );
    }

    return (
      <div {...rootProps}>
        {header}
        {content}
        {footer}
      </div>
    );
  }

  @autobind
  handleModalStoreState() {
    const modalStore = this.state.modalStore;
    const shouldOpenModal = modalStore.shouldOpen;
    const shouldCloseModal = modalStore.shouldClose;
    const modalToOpenId = modalStore.modalId;

    if (modalToOpenId === this.props.id) {
      if (shouldOpenModal) {
        this.open();
      }

      if (shouldCloseModal) {
        this.close();
      }
    }
  }

  open() {
    const $modal = $(ReactDOM.findDOMNode(this.modal));

    $modal.openModal({
      dismissible: this.props.dismissible,
      opacity: this.props.opacity,
      inDuration: this.props.inDuration,
      outDuration: this.props.outDuration,
      ready: this.handleReady,
      complete: this.props.complete,
    });
  }

  @autobind
  handleReady() {
    this.resizeContent();
    ModalActions.openFinished();

    if (typeof this.props.ready === 'function') {
      this.props.ready();
    }
  }

  close() {
    const $modal = $(ReactDOM.findDOMNode(this.modal));

    $modal.closeModal();
  }

  @autobind
  resizeContent() {
    const modal = ReactDOM.findDOMNode(this.modal);
    const contentContainer = ReactDOM.findDOMNode(this.contentContainer);

    $(modal).css('max-height', $(window).height() - (this.props.marginHeaderFooter));
    $(modal).css('width', this.props.width);

    const availableHeight = this.getAvailableHeight();
    const contentHeight = this.getContentHeight();
    let containerHeight = 0;

    if (!!this.props.useAvailableHeight) {
      containerHeight = availableHeight;
    } else {
      containerHeight = Math.min(availableHeight, contentHeight);
    }

    $(contentContainer).css('height', containerHeight);
  }

  getAvailableHeight() {
    const headerContainer = ReactDOM.findDOMNode(this.headerContainer);
    const footerContainer = ReactDOM.findDOMNode(this.footerContainer);
    const windowHeight = $(window).height() - (this.props.marginHeaderFooter);
    const containerHeight = ($(headerContainer).height() + $(footerContainer).height());

    return windowHeight - containerHeight;
  }

  getContentHeight() {
    const contentContainer = ReactDOM.findDOMNode(this.contentContainer);
    const minContentHeight = this.props.minContentHeight;
    let contentHeight = 0;

    $(contentContainer).find('> *').each(
      (i, content) => { contentHeight += $(content).outerHeight(); }
    );

    return Math.max(minContentHeight, contentHeight);
  }
}
