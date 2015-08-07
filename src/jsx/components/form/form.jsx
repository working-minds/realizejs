var Form = React.createClass({
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    focus: React.PropTypes.bool,
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
      focus: true,
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

  render: function() {
    return (
      <form action={this.props.action}
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.props.onReset}
        ref="form">

        {this.renderInputs()}
        {this.props.children}
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

  serialize : function() {
    var form = React.findDOMNode(this.refs.form);
    return $(form).serializeObject();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var postData = this.serialize();

    if(this.props.onSubmit(event, postData)) {
      this.submit(postData);
    }
  },

  submit: function(postData) {
    $.ajax({
      url: this.props.action,
      method: this.props.method,
      dataType: this.props.dataType,
      data: postData,
      success: function(data) {
        this.props.onSuccess(data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.props.onError(xhr, status, error);
      }.bind(this)
    });
  }

});
