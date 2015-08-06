var InputAutocompleteOption = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.option',
      selected: false,
      onSelect: function() {
        return true;
      }
    };
  },

  render: function() {
    return (
      <li className={this.className()} onClick={this.handleSelect}>
        <InputCheckbox id={this.parseOptionId()} checked={this.props.selected} onClick={this.disableEvent} />
        <Label id={this.parseOptionId()} name={this.props.name}/>
      </li>
    );
  },

  handleSelect: function(event) {
    var option = {
      name: this.props.name,
      value: this.props.value,
      showOnTop: false
    };

    this.props.onSelect(option);
  },

  disableEvent: function(event) {
    event.stopPropagation();
  },

  parseOptionId: function() {
    return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
  }
});
