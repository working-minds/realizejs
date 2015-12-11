var Form = React.createClass({
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
    return ['resource', 'data'];
  },

  propsToForwardMapping: function() {
    return {
      errors: this.state.errors,
      formStyle: this.props.style
    };
  },

  render: function() {
    return (
      <form action={this.props.action}
        method={this.props.method}
        encType={this.parseFormEncType()}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        className={this.className()}
        ref="form">

        {this.renderFlashErrors()}
        {this.renderFlashSuccess()}
        {this.renderInputs()}
        {this.renderChildren()}

        <FormButtonGroup {...this.propsWithoutCSS()} isLoading={this.isLoading()} />
      </form>
    );
  },

  renderInputs: function() {
    if(!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return '';
    }

    return <InputGroup {...this.propsWithoutCSS()} formStyle={this.props.style} errors={this.state.errors} />;
  },

  parseFormEncType: function() {
    if(!!this.props.multipart) {
      return "multipart/form-data";
    } else {
      return "application/x-www-form-urlencoded";
    }
  },

  handleSubmit: function(event) {
    event.nativeEvent.preventDefault();
    var postData = this.serialize();
    this.props.onSubmit(event, postData);
    FormActions.submit(this.props.id, event, postData);

    if(!event.isDefaultPrevented()) {
      this.setState({isLoading: true, errors: {}, showSuccessFlash: false});
      this.submit(postData);
    }
  },

  handleReset: function(event) {
    this.props.onReset(event);
    FormActions.reset(this.props.id, event);
  },

  serialize : function() {
    var form = ReactDOM.findDOMNode(this.refs.form);
    return $(form).serializeObject();
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

  isLoading: function() {
    var isLoading = this.state.isLoading;
    if(isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
});
