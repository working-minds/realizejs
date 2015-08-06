var InputAutocompleteResult = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    selectedOptions: React.PropTypes.array,
    active: React.PropTypes.number,
    onKeyDown: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.result',
      options: [],
      selectedOptions: []
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <div className="input-autocomplete__search">
          <Icon type="search" className="prefix" />
          <InputText onKeyDown={this.props.onKeyDown} onKeyUp={this.props.onKeyUp} autoComplete="off" />
        </div>

        <a href="#!" className="input-autocomplete__clear-button" onClick={this.props.onClear}>
          Limpar itens selecionados
        </a>

        <InputAutocompleteList
          id={this.props.id}
          selectedOptions={this.props.selectedOptions}
          options={this.props.options}
          active={this.props.active}
          onSelect={this.props.onSelect}
        />
      </div>
    );
  }
});

