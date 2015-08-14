var InputRadioGroup = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValue: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name:'',
      align: 'vertical',
      currentValue: null
    };
  },

  getInitialState: function() {
    return {
      currentValue: this.props.currentValue
    }
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      optionProps['id'] = this.props.name + '_' + i,
      optionProps['type'] = 'radio';

      if (this.state.currentValue === optionProps.value)
        optionProps['defaultChecked'] = optionProps.value;

      selectOptions.push(
        <p>
          <input {...optionProps } name={this.props.name}/>
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
