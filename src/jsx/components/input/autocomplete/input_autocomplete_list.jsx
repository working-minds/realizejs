var InputAutocompleteList = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.list',
      onSelect: function() {
        return true;
      }
    };
  },

  render: function() {
    return (
      <ul className={this.className()}>
        {this.renderOptions()}
      </ul>
    );
  },

  renderOptions: function() {
    var listOptions = [];
    var options = this.props.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      listOptions.push(
        <InputAutocompleteOption {...optionProps}
          onSelect={this.props.onSelect}
          id={this.props.id}
          key={optionProps.name}
        />
      );
    }

    return listOptions;
  }
});
