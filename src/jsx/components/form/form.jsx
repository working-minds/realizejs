var Form = React.createClass({
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
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

  render: function() {
    return (
      <form action={this.props.action}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.props.onReset}
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

    for(var inputName in inputsProps) {
      if(inputsProps.hasOwnProperty(inputName)) {
        var inputProps = inputsProps[inputName];
        inputComponents.push(<Input {...inputProps} id={inputName} key={"input_" + inputIndex} ref={"input_" + inputIndex} />);
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
  }
});
