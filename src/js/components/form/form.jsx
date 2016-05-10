var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');
var FormErrorHandlerMixin = require('realize/mixins/form/form_error_handler_mixin.jsx');
var FormSuccessHandlerMixin = require('realize/mixins/form/form_success_handler_mixin.jsx');

window.Form = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin,
    FormErrorHandlerMixin,
    FormSuccessHandlerMixin
  ],

  propTypes: {
    id: React.PropTypes.string,
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    contentType: React.PropTypes.string,
    multipart: React.PropTypes.bool,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    ajaxSubmit: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    inputWrapperComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element, React.PropTypes.string]),
    submitButton: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
    otherButtons: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
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
      onSubmit: function(event, postData) {},
      onReset: function(event) {}
    };
  },

  getInitialState: function() {
    return {
      isLoading: null
    };
  },

  propsToForward: function() {
    return ['resource', 'data', 'readOnly', 'disabled'];
  },

  propsToForwardMapping: function() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
  },

  /* Rendering functions */

  render: function() {
    return (
      <form action={this.props.action}
        method={(this.props.method == 'PUT' && !this.props.ajaxSubmit)? 'POST' : this.props.method}
        encType={this.parseFormEncType()}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        className={this.className()}
        ref="form">

        {this.renderFlashErrors()}
        {this.renderFlashSuccess()}
        {this.renderInputs()}
        {this.renderMethodTag()}
        {this.renderChildren()}

        <FormButtonGroup {...this.propsWithoutCSS()} isLoading={this.isLoading()} />
      </form>
    );
  },

  renderMethodTag: function() {
    return <input name="_method" type="hidden" value={this.props.method} />;
  },

  renderInputs: function() {
    if(!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return [];
    }

    return <InputGroup {...this.propsWithoutCSS()} formStyle={this.props.style} errors={this.state.errors} ref="inputGroup" />;
  },

  parseFormEncType: function() {
    if(!!this.props.multipart) {
      return "multipart/form-data";
    } else {
      return "application/x-www-form-urlencoded";
    }
  },

  /* Serializer functions */

  serialize : function() {
    var form = ReactDOM.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  /* Submit handling functions */

  handleSubmit: function(event) {
    event.nativeEvent.preventDefault();
    var postData = this.serialize();
    this.props.onSubmit(event, postData);
    FormActions.submit(this.props.id, event, postData);

    if(!event.isDefaultPrevented()) {
      this.setState({isLoading: true, errors: [], showSuccessFlash: false});
      this.submit(postData);
    }
  },

  submit: function(postData) {
    if(!!this.props.ajaxSubmit) {
      this.ajaxSubmit(postData);
    } else {
      this.formSubmit();
    }
  },

  ajaxSubmit: function(postData) {
    var submitOptions = {
      url: this.props.action,
      method: this.props.method,
      data: postData,
      success: this.handleSuccess,
      error: this.handleError
    };

    if(!!this.props.dataType) {
      submitOptions.dataType = this.props.dataType;
    }

    if(!!this.props.contentType) {
      submitOptions.contentType = this.props.contentType;

      if(submitOptions.contentType == "application/json") {
        submitOptions.data = JSON.stringify(postData);
      }
    }

    if(this.props.multipart){
      var fd = new FormData(ReactDOM.findDOMNode(this.refs.form));
      var multipartOptions = {
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false
      };
      submitOptions = $.extend({},submitOptions,multipartOptions);
    }

    $.ajax(submitOptions);
  },

  formSubmit: function() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.submit();
  },

  /* Reset handling functions */

  handleReset: function(event) {
    this.props.onReset(event);
    FormActions.reset(this.props.id, event);
  },

  reset: function() {
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.reset();
  },

  haveNativeReset: function() {
    return true;
  },

  /* Utilities */

  isLoading: function() {
    var isLoading = this.state.isLoading;
    if(isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
});
