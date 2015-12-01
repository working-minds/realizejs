var InputAutocompleteResult = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    selectedOptions: React.PropTypes.array,
    active: React.PropTypes.number,
    searchValue: React.PropTypes.string,
    onKeyDown: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
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
        {this.renderSearchInput()}
        {this.renderClearButton()}
        {this.renderResult()}
      </div>
    );
  },

  renderSearchInput: function() {
    return (
      <div className="input-autocomplete__search">
        <Icon type="search" className="prefix" />
        <InputText onKeyDown={this.props.onKeyDown} value={this.props.searchValue} onChange={this.props.onChange} autoComplete="off" />
      </div>
    );
  },

  renderClearButton: function() {
    return (
      <a href="#!"
         className="input-autocomplete__clear-button"
         onClick={this.props.onClear}>

        {Realize.t("inputs.autocomplete.clear")}
      </a>
    );
  },

  renderResult: function() {
    var options = this.props.options;
    if(options.length > 0) {
      return this.renderList();
    } else {
      return this.renderEmptyMessage();
    }
  },

  renderList: function() {
    return (
      <InputAutocompleteList
        id={this.props.id}
        selectedOptions={this.props.selectedOptions}
        options={this.props.options}
        active={this.props.active}
        onSelect={this.props.onSelect}
        onOptionMouseEnter={this.props.onOptionMouseEnter}
        ref="list"
      />
    );
  },

  renderEmptyMessage: function() {
    return (
      <div className="input-autocomplete__empty-message">
        {Realize.t("inputs.autocomplete.emptyResult")}
      </div>
    );
  }

});

