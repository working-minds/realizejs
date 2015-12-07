var InputAutocompleteSelect = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    InputComponentMixin
  ],

  propTypes: {
    selectedOptions: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selectedOptions: [],
      themeClassKey: 'input.autocomplete.select',
      placeholder: 'select',
      onFocus: function() {
        return true;
      },
      onBlur: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      options: []
    };
  },

  //TODO: este e um componente do materialize. Tornar este componente generico.
  render: function() {
    return (
      <div>
        <div className={this.className()}>
          <span className="caret">▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedOptions()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            key={"autocomplete_select_" + this.generateUUID()}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  },

  selectId: function() {
    return 'autocomplete_select_' + this.props.id;
  },

  renderSelectedOptions: function() {
    var options = this.props.selectedOptions;

    return $.map(options, function(option) {
      return option.name;
    }).join(', ');
  }
});