import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import { FormActions } from '../../actions';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';

import {
  InputGroup,
  FormButtonGroup
} from '../../components';

import {
  CssClassMixin,
  ContainerMixin,
  FormErrorHandlerMixin,
  FormSuccessHandlerMixin
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
    style: PropTypes.string,
    resource: PropTypes.string,
    ajaxSubmit: PropTypes.bool,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    inputWrapperComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]),
    submitButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    otherButtons: PropTypes.array,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
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
    style: 'default',
    resource: null,
    ajaxSubmit: true,
    isLoading: false,
    disabled: false,
    readOnly: false,
    inputWrapperComponent: null,
    submitButton: {
      name: 'actions.send',
      icon: 'send'
    },
    otherButtons: [],
    onSubmit: function (event, postData) { },
    onReset: function (event) { }
  };

  state = {
    isLoading: null
  };

  renderMethodTag() {
    return <input name="_method" type="hidden" value={this.props.method} />;
  }

  renderInputs() {
    if (!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return [];
    }

    return <InputGroup {...this.propsWithoutCSS() } formStyle={this.props.style} errors={this.state.errors} ref="inputGroup" />;
  }

  render() {
    return (
      <form action={this.props.action}
        method={(this.props.method == 'PUT' && !this.props.ajaxSubmit) ? 'POST' : this.props.method}
        encType={this.parseFormEncType()}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        className={this.className()}
        hidden={this.props.hidden}
        ref="form">

        {this.renderFlashErrors()}
        {this.renderFlashSuccess()}
        {this.renderInputs()}
        {this.renderMethodTag()}
        {this.renderChildren()}

        <FormButtonGroup {...this.propsWithoutCSS() } isLoading={this.isLoading()} />
      </form>
    );
  }

  propsToForward() {
    return ['resource', 'data', 'readOnly', 'disabled'];
  }

  parseFormEncType() {
    if (!!this.props.multipart) {
      return "multipart/form-data";
    } else {
      return "application/x-www-form-urlencoded";
    }
  }

  propsToForwardMapping() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
  }

  serialize() {
    var form = ReactDOM.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  }

  handleSubmit = (event) => {
    event.nativeEvent.preventDefault();
    var postData = this.serialize();
    this.props.onSubmit(event, postData);
    FormActions.submit(this.props.id, event, postData);

    if (!event.isDefaultPrevented()) {
      this.setState({ isLoading: true, errors: [], showSuccessFlash: false });
      this.submit(postData);
    }
  }

  submit(postData) {
    if (!!this.props.ajaxSubmit) {
      this.ajaxSubmit(postData);
    } else {
      this.formSubmit();
    }
  }

  ajaxSubmit(postData) {
    var submitOptions = {
      url: this.props.action,
      method: this.props.method,
      data: postData,
      success: this.handleSuccess,
      error: this.handleError
    };

    if (!!this.props.dataType) {
      submitOptions.dataType = this.props.dataType;
    }

    if (!!this.props.contentType) {
      submitOptions.contentType = this.props.contentType;

      if (submitOptions.contentType == "application/json") {
        submitOptions.data = JSON.stringify(postData);
      }
    }

    if (this.props.multipart) {
      var fd = new FormData(ReactDOM.findDOMNode(this.refs.form));
      var multipartOptions = {
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false
      };
      submitOptions = $.extend({}, submitOptions, multipartOptions);
    }

    $.ajax(submitOptions);
  }

  formSubmit() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.submit();
  }

  handleReset = (event) => {
    this.props.onReset(event);
    FormActions.reset(this.props.id, event);
  }

  reset() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.reset();
  }

  haveNativeReset() {
    return true;
  }

  isLoading() {
    var isLoading = this.state.isLoading;
    if (isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
}
