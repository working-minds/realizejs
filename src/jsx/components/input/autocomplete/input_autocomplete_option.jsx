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
      <li className={this.className()}>
        <InputCheckbox id={this.parseOptionId()} checked={this.props.selected} />
        <Label id={this.parseOptionId()} name={this.props.name} onClick={this.handleSelect} />
      </li>
    );
  },

  handleSelect: function(event) {
    var option = {
      name: this.props.name,
      value: this.props.value
    };

    this.props.onSelect(option);
  },

  parseOptionId: function() {
    return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
  }
});
