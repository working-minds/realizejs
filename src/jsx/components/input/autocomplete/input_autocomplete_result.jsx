var InputAutocompleteResult = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.array,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.result'
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <Icon type="search" className="prefix" />
        <InputText
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          autoComplete="off"
        />

        <InputAutocompleteList
          id={this.props.id}
          options={this.props.options}
          onSelect={this.props.onSelect}
        />
      </div>
    );
  }
});

