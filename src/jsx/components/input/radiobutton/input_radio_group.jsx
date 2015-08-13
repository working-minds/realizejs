var InputRadioGroup = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    options: React.PropTypes.array,
    currentValue: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name:'',
      align: 'vertical',
      options: [],
      currentValue: null
    };
  },

  getInitialState: function() {
    return {
      currentValue: this.props.currentValue
    }
  },

  renderItems: function() {
    return this.props.options.map(function (item, i) {

      var optionsInput = {
        type:'radio',
        id: this.props.name + '_' + i,
        name: this.props.name,
        value: item.value
      };
      if (this.state.currentValue === item.value)
        optionsInput['defaultChecked'] = "checked";

      return (
        <p>
          <input {...optionsInput } />
          <Label id={optionsInput.id} label={item.name} />
        </p>
      );
    }, this);
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-' + this.props.align} ref="radioGroup">
        {this.renderItems()}
      </div>
    );
  },

  handleClick: function(event) {
    $label = $(event.currentTarget);
    $radio = $(React.findDOMNode(this.refs.radioGroup)).find("#"+$label.attr('for'));

    this.setState({currentValue: $radio.val()});

  }

});
