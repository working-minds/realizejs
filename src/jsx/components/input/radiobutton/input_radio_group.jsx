var InputRadioGroup = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValue: React.PropTypes.string,
    withGap: React.PropTypes.string
  }, 

  getDefaultProps: function() {
    return {
      name:'',
      align: 'vertical',
      currentValue: null,
      withGap: false
    };
  },

  getInitialState: function() {
    return {
      currentValue: this.props.currentValue
    };
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      optionProps.id = this.props.name + '_' + i;
      optionProps.type = 'radio';

      if (this.state.currentValue === optionProps.value)
        optionProps.defaultChecked = optionProps.value;
      if (this.props.withGap)
        optionProps.className = 'with-gap';

      selectOptions.push(
        <p key={"p_input_" + i}>
          <input {...optionProps } name={this.props.name} onChange={this._handleChange} />
          <Label id={optionProps.id} label={optionProps.name} />
        </p>
      );
    }
    return selectOptions;
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-' + this.props.align} ref="radioGroup">
        {this.renderOptions()}
      </div>
    );
  }

});
