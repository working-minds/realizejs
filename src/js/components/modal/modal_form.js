import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { autobind, mixin } from '../../utils/decorators';

import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Form,
  FormButtonGroup,
} from '../../components';

import {
  CssClassMixin,
  ContainerMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
  ContainerMixin
)
export default class ModalForm extends Component {
  static propTypes = {
    title: PropTypes.string,
    form: PropTypes.object,
    children: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    form: {},
  };

  state = {
    isLoading: false,
  };

  renderHeader() {
    const modalHeader = this.filterChildren(ModalHeader);
    if (!modalHeader || modalHeader.length === 0) {
      modalHeader.push(
        <ModalHeader key="modal-header">
          <h5>{this.props.title}</h5>
        </ModalHeader>
      );
    }

    return modalHeader;
  }

  renderContent() {
    return (
      <ModalContent>
        <Form
          {...this.props.form}
          submitButton={false}
          otherButtons={[]}
          onError={this.handleSubmitError}
          onSuccess={this.handleSubmitSuccess}
          ref={ref => { this.form = ref; }}
        >

          {this.props.children}
        </Form>
      </ModalContent>
    );
  }

  renderFooter() {
    return (
      <ModalFooter>
        <FormButtonGroup {...this.props.form} submitButton={this.submitButtonProps()} isLoading={this.state.isLoading} />
      </ModalFooter>
    );
  }

  render() {
    return (
      <Modal {...this.props}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </Modal>
    );
  }

  submitButtonProps() {
    var submitButtonProps = this.props.form.submitButton || this.defaultSubmitButtonProps();
    submitButtonProps.onClick = this.submitForm.bind(this);

    return submitButtonProps;
  }

  defaultSubmitButtonProps() {
    return {
      name: 'actions.send',
      icon: 'send',
    };
  }

  submitForm(event) {
    this.form.handleSubmit(event);
    this.setState({ isLoading: true });
  }

  @autobind
  handleSubmitSuccess(data, status, xhr) {
    const onSuccessCallback = this.props.form.onSuccess;
    if (typeof onSuccessCallback === 'function') {
      this.props.onSuccess(data, status, xhr);
    }

    this.setState({ isLoading: false });

    return true;
  }

  @autobind
  handleSubmitError(xhr, status, error) {
    const onErrorCallback = this.props.form.onError;
    if (typeof onErrorCallback === 'function') {
      this.props.onError(xhr, status, error);
    }

    this.setState({ isLoading: false });

    return true;
  }
}
