var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');

window.BulkEditForm = React.createClass({
  mixins: [CssClassMixin, UtilsMixin],

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
      onSubmit: function (event, postData) {},
      onReset: function (event) {}
    };
  },

  getInitialState: function() {
    var disabled = [];

    for(var i = 0; i < this.props.inputGroups.length; i++ ) {
      var inputs = this.props.inputGroups[i].inputs;
      for(var inputId in inputs) {
        disabled.push(inputId);
      }
    }

    return {
      disabled: disabled,
      inputKeys: this.generateInputIds()
    };
  },

  render: function() {
    var formProps = $.extend({}, this.props);
    delete formProps.inputGroups;

    return (
      <Form {...formProps}>
        {this.renderChildren()}
      </Form>
    );
  },

  generateInputIds: function(){
    var idsMap = {};
    for (var i = 0; i < this.props.inputGroups.length; i++ ){
      var inputs = this.props.inputGroups[i].inputs;
      for(var inputId in inputs)
        idsMap[inputId] = "input_" + inputId + this.generateUUID();
    }

    return idsMap;
  },

  renderChildren: function () {
    var inputComponents = [];

    for(var i = 0; i < this.props.inputGroups.length; i++ ) {
      var inputGroup = this.props.inputGroups[i];
      this.generateInputs(inputComponents, inputGroup, i);
    }

    return inputComponents;
  },


  generateInputs: function (inputComponents, inputGroup, i) {
    var inputIndex = 0;
    var inputsProps = inputGroup.inputs;

    inputComponents.push(<h5 key={"header_" + i}>{inputGroup.label}</h5>);

    for (var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if (!inputProps.id) {
          inputProps.id = inputId;
        }

        inputProps.disabled = (this.state.disabled.indexOf(inputId) !== -1);
        var resourceName = inputGroup.resource || this.props.resource;

        var switchId = "enable";
        if (!!resourceName) {
          switchId = switchId + "_" + resourceName
        }
        switchId = switchId + "_" + inputId;

        var switchName = "enable";
        if (!!resourceName) {
          switchName = switchName + "[" + resourceName + "]"
        }
        switchName = switchName + "[" + inputId + "]";

        if (inputId == 'ids') {
          inputComponents.push(
            <Input {...inputProps}
              disabled={false}
              data={this.props.data}
              resource={inputGroup.resource || this.props.resource}
              className="col m7 s10"
              key={"value_" + inputId}
              ref={"input_" + inputId}
              component='hidden'
            />
          );
        } else {
          inputComponents.push(
            <Container className="row" key={"container_" + inputId}>
              <InputSwitch
                id={switchId}
                name={switchName}
                onChange={this.handleSwitchChange}
                className="switch col l3 m3 s2"
                offLabel=''
                onLabel=''
                key={"switch_" + inputId}
              />
              <Input {...inputProps}
                data={this.props.data}
                errors={this.props.errors}
                resource={inputGroup.resource || this.props.resource}
                formStyle={this.props.formStyle}
                className="input-field col offset-s1 l8 m8 s8"
                clearTheme={true}
                key={this.state.inputKeys[inputId]}
                ref={"input_" + inputId}
              />
            </Container>
          );
          inputIndex++;
        }
      }
    }

    return inputComponents;
  },


  handleSwitchChange: function (event) {
    var sw = event.target;
    var inputId = sw.id.replace(/^enable_/, '');

    if (sw.name.indexOf('[') !== -1){
      inputId = sw.name.split('[').pop().replace(']', '');
    }

    var disabled = $.extend([], this.state.disabled);

    if(!sw.checked) {
      disabled.push(inputId);
    } else {
      disabled.splice(disabled.indexOf(inputId), 1);
    }

    var inputKeys = this.state.inputKeys;
    inputKeys[inputId] = "input_" + inputId + this.generateUUID();
    this.setState( { disabled: disabled, inputKeys: inputKeys });
  }

});