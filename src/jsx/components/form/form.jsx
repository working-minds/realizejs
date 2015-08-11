var Form = React.createClass({
  mixins: [
    CssClassMixin,
    FormErrorHandlerMixin,
    FormSuccessHandlerMixin
  ],

  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    style: React.PropTypes.string,
    postObject: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      action: '',
      method: 'POST',
      dataType: undefined,
      submitButton: {
        name: 'Enviar'
      },
      otherButtons: [],
      isLoading: false,
      themeClassKey: 'form',
      style: 'default',
      postObject: null,
      onSubmit: function(event, postData) {
        return true;
      },
      onReset: function(event) {
        return true;
      }
    };
  },

  render: function() {
    return (
      <form action={this.props.action}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.props.onReset}
        className={this.className()}
        ref="form">

        {this.renderFlashErrors()}
        {this.renderInputs()}
        {this.props.children}

        <div className={WRF.themeClass('form.buttonGroup')}>
          {this.renderOtherButtons()}
          <Button {...this.submitButtonProps()} ref="submitButton" />
        </div>
      </form>
    );
  },

  renderInputs: function() {
    if(!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return '';
    }

    return <InputGroup {...this.propsWithoutCSS()} errors={this.state.errors} />;
  },

  renderOtherButtons: function() {
    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for(var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(<Button {...otherButtonProps} key={otherButtonProps.name} />);
    }

    return otherButtons;
  },

  submitButtonProps: function() {
    var isLoading = this.isLoading();
    return $.extend({}, this.props.submitButton, {
      type: "submit",
      disabled: isLoading,
      isLoading: isLoading
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var postData = this.serialize();

    if(this.props.onSubmit(event, postData)) {
      this.setState({isLoading: true});
      this.submit(postData);
    }
  },

  serialize : function() {
    var form = React.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  submit: function(postData) {
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

    $.ajax(submitOptions);
  },

  isLoading: function() {
    var isLoading = this.state.isLoading;
    if(isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  }
});
