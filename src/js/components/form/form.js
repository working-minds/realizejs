import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';

import PropTypes from '../../prop_types';
import { FormActions } from '../../actions';
import { mixin, autobind } from '../../utils/decorators';
import { config } from '../../realize';

import InputGroup from './input_group';
import FormButtonGroup from './form_button_group';
import Input from '../input/input';

import {
  CssClassMixin,
  ContainerMixin,
  FormErrorHandlerMixin,
  FormSuccessHandlerMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
  ContainerMixin,
  FormErrorHandlerMixin,
  FormSuccessHandlerMixin
)
export default class Form extends Component {
  static propTypes = {
    id: PropTypes.string,
    inputs: PropTypes.object,
    data: PropTypes.object,
    action: PropTypes.string,
    method: PropTypes.string,
    dataType: PropTypes.string,
    contentType: PropTypes.string,
    multipart: PropTypes.bool,
    formStyle: PropTypes.string,
    resource: PropTypes.string,
    ajaxSubmit: PropTypes.bool,
    jquerySerialize: PropTypes.bool,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    inputWrapperComponent: PropTypes.component,
    submitButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    otherButtons: PropTypes.array,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    onValidationErrors: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'form',
    id: null,
    inputs: {},
    data: {},
    action: '',
    method: 'POST',
    dataType: undefined,
    contentType: undefined,
    multipart: false,
    formStyle: 'default',
    resource: null,
    ajaxSubmit: true,
    jquerySerialize: true,
    isLoading: false,
    disabled: false,
    readOnly: false,
    inputWrapperComponent: Input,
    submitButton: {
      name: 'actions.send',
      icon: 'send',
    },
    otherButtons: [],
    onSubmit() {},
    onReset() {},
    onValidationErrors() {},
  };

  state = {
    isLoading: null,
  };

  constructor(props) {
    super(props);

    this.clearErrors = this.clearErrors.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleValidationError = this.handleValidationError.bind(this);
  }

  propsToForward() {
    return ['resource', 'data', 'readOnly', 'disabled', 'inputWrapperComponent'];
  }

  propsToForwardMapping() {
    return {
      errors: this.state.errors,
      formStyle: this.props.formStyle,
    };
  }

  parseFormMethod() {
    return (this.props.method === 'PUT' && !this.props.ajaxSubmit)
      ? 'POST'
      : this.props.method;
  }

  parseFormEncType() {
    return this.props.multipart
      ? 'multipart/form-data'
      : 'application/x-www-form-urlencoded';
  }

  serialize() {
    return (this.props.jquerySerialize)
      ? this.jquerySerialize()
      : this.inputsSerialize();
  }

  validate(event, postData) {
    const inputGroup = this.inputGroup;
    if (!inputGroup) return;

    const validationErrors = inputGroup.validate();
    if (!_.isEmpty(validationErrors)) {
      this.props.onValidationErrors(validationErrors, postData);
      event.preventDefault();
    }
  }

  jquerySerialize() {
    const form = ReactDOM.findDOMNode(this.form);
    return $(form).serializeObject();
  }

  inputsSerialize() {
    const inputGroup = this.inputGroup;
    return inputGroup.serialize();
  }

  @autobind
  handleSubmit(event) {
    event.nativeEvent.preventDefault();
    event.persist();
    const postData = this.serialize();

    this.validate(event, postData);
    this.props.onSubmit(event, postData);

    FormActions.submit(this.props.id, event, postData);

    if (!event.isDefaultPrevented()) {
      this.setState({ isLoading: true, errors: [], showSuccessFlash: false });
      this.submit(postData);
    }
  }

  submit(postData) {
    this.props.ajaxSubmit
      ? this.ajaxSubmit(postData)
      : this.formSubmit();
  }

  ajaxSubmit(postData) {
    let submitOptions = {
      method: this.props.method,
      data: postData,
    };

    if (!!this.props.dataType) {
      submitOptions.dataType = this.props.dataType;
    }

    if (!!this.props.contentType) {
      submitOptions.contentType = this.props.contentType;

      if (submitOptions.contentType === 'application/json') {
        submitOptions.data = JSON.stringify(postData);
      }
    }

    if (this.props.multipart) {
      const fd = new FormData(ReactDOM.findDOMNode(this.form));
      const multipartOptions = {
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
      };
      submitOptions = Object.assign({}, submitOptions, multipartOptions);
    }

    config.httpClient(this.props.action, submitOptions)
      .then((data, status, xhr) => this.handleSuccess(data, status, xhr))
      .catch(this.handleError);
  }

  formSubmit() {
    const formNode = ReactDOM.findDOMNode(this.form);
    formNode.submit();
  }

  @autobind
  handleReset(event) {
    this.props.onReset(event);
    FormActions.reset(this.props.id, event);
  }

  reset() {
    const formNode = ReactDOM.findDOMNode(this.form);
    formNode.reset();
  }

  haveNativeReset() {
    return true;
  }

  isLoading() {
    let isLoading = this.state.isLoading;
    if (isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }

  renderMethodTag() {
    return <input name="_method" type="hidden" value={this.props.method} />;
  }

  renderInputs() {
    if (!this.props.inputs || _.isEmpty(this.props.inputs)) {
      return [];
    }

    return (
      <InputGroup
        {...this.propsWithoutCSS()}
        formStyle={this.props.formStyle}
        errors={this.state.errors}
        ref={ref => { this.inputGroup = ref; }}
      />
    );
  }

  render() {
    return (
      <form
        action={this.props.action}
        method={this.parseFormMethod()}
        encType={this.parseFormEncType()}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        className={this.className()}
        hidden={this.props.hidden}
        ref={ref => { this.form = ref; }}
      >

        {this.renderFlashErrors()}
        {this.renderFlashSuccess()}
        {this.renderInputs()}
        {this.renderMethodTag()}
        {this.renderChildren()}

        <FormButtonGroup {...this.propsWithoutCSS()} isLoading={this.isLoading()} />
      </form>
    );
  }
}
