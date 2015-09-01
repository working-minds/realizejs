var BulkEditForm = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin
  ],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    dataType: React.PropTypes.string,
    contentType: React.PropTypes.string,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      inputs: {},
      data: {},
      action: '',
      method: 'POST',
      dataType: undefined,
      contentType: undefined,
      submitButton: {
        name: 'Enviar',
        icon: 'send'
      },
      otherButtons: [],
      isLoading: false,
      themeClassKey: 'form',
      style: 'default',
      resource: null,
      onSubmit: function (event, postData) {
      },
      onReset: function (event) {
      }
    };
  },

  getInitialState: function() {

    var disabled = [];
    for(var inputId in this.props.inputs) {
      disabled.push(inputId);
    }

    return {
      disabled: disabled,
      inputKeys: this.generateInputIds()
    };
  },

  render: function() {

    var formProps = $.extend({}, this.props);
    delete formProps.inputs;
    return (
      <Form {...formProps}>
        {this.renderChildren()}
      </Form>);
  },

  generateInputIds: function(){
    var idsMap = {};
    for(var inputId in this.props.inputs)
      idsMap[inputId] = "input_" + inputId + this.generateUUID();
    return idsMap;
  },

  renderChildren: function () {

    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if(!inputProps.id) {
          inputProps.id = inputId;
        }

        if (this.state.disabled.indexOf(inputId) === -1)
        {
          inputProps.disabled = false;
        } else {
          inputProps.disabled = true;
        }

        inputComponents.push(
            <div className="row">
              <InputSwitch id={"enable_"+inputId}
                           name={"enable_"+inputId}
                           onChange={this.handleSwitchChange}
                           className="switch col s2"
                           offLabel=''
                           onLabel=''
                  />
              <Input {...inputProps}
                  data={this.props.data}
                  errors={this.props.errors}
                  resource={this.props.resource}
                  formStyle={this.props.formStyle}
                  className="col s10"
                  key={this.state.inputKeys[inputId]}
                  ref={"input_" + inputId}
                  />
            </div>
        );
        inputIndex++;
      }
    }

    return inputComponents;

  },

  handleSwitchChange: function (event) {
    var sw = event.target;
    var inputId = sw.id.replace(/^enable_/, '');

    var disabled = $.extend([], this.state.disabled);

    if(!sw.checked)
    {
      disabled.push(inputId);
    }
    else
    {
      disabled.splice(disabled.indexOf(inputId), 1);
    }

    var inputKeys = this.state.inputKeys;
    inputKeys[inputId] = "input_" + inputId + this.generateUUID();
    this.setState( { disabled: disabled, inputKeys: inputKeys });
  }



});