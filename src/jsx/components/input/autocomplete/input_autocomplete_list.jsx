var InputAutocompleteList = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.list',
      options: [],
      selectedOptions: [],
      onSelect: function() {
        return true;
      }
    };
  },

  render: function() {
    return (
      <ul className={this.className()}>
        {this.renderSelectedOptions()}
        {this.renderUnselectedOptions()}
      </ul>
    );
  },

  renderSelectedOptions: function() {
    return this.renderOptions(this.props.selectedOptions, true);
  },

  renderUnselectedOptions: function() {
    var selectedOptionsValues = $.map(this.props.selectedOptions, function(option) {
      return option.value;
    });

    var unselectedOptions = $.grep(this.props.options, function(option) {
      return (selectedOptionsValues.indexOf(option.value) < 0);
    });

    return this.renderOptions(unselectedOptions, false);
  },

  renderOptions: function(options, selected) {
    var listOptions = [];

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      listOptions.push(
        <InputAutocompleteOption {...optionProps}
          onSelect={this.props.onSelect}
          id={this.props.id}
          selected={selected}
          key={optionProps.name}
        />
      );
    }

    return listOptions;
  }
});
