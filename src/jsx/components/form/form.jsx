var Form = React.createClass({
  mixins: [CssClassMixin, FormErrorHandlerMixin],
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
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      action: '',
      method: 'POST',
      dataType: 'json',
      submitButton: {
        name: 'Enviar'
      },
      otherButtons: [],
      isLoading: false,
      themeClassKey: 'form',
      style: 'default',
      postObject: null,
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event, postData) {
        return true;
      },
      onReset: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      isLoading: null
    };
  },

  componentWillMount: function() {
    if(this.props.postObject !== null) {
      this.applyPostObjectToInputsProps();
    }
  },

  render: function() {
    return (
      <form action={this.props.action}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.props.onReset}
        className={this.className()}
        ref="form">

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
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];

        inputComponents.push(
          <Input {...inputProps}
            errors={this.state.errors[inputId]}
            formStyle={this.props.style}
            key={"input_" + inputIndex}
            ref={"input_" + inputIndex}
          />
        );

        inputIndex++;
      }
    }

    return inputComponents;
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

  applyPostObjectToInputsProps: function() {
    var postObject = this.props.postObject;
    var inputsProps = this.props.inputs;

    for(var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];

        inputProps.name = postObject + '[' + (inputProps.name || inputId) + ']';
        inputProps.id = postObject + '_' + inputId;
      }
    }
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
    $.ajax({
      url: this.props.action,
      method: this.props.method,
      dataType: this.props.dataType,
      data: postData,
      success: function(data) {
        this.setState({isLoading: false});
        this.props.onSuccess(data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({isLoading: false});
        this.handleError(xhr, status, error);
        this.props.onError(xhr, status, error);
      }.bind(this)
    });
  },

  isLoading: function() {
    var isLoading = this.state.isLoading;
    if(isLoading === null) {
      isLoading = this.props.isLoading;
    }

    return isLoading;
  },
});
