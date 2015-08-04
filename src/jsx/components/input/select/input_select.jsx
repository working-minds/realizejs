var InputSelect = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin,
    MaterializeSelectMixin
  ],

  propTypes: {
    includeBlank: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      options: [],
      themeClassKey: 'input.select'
    };
  },

  render: function() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
        disabled={this.state.disabled}
        className={this.className()}
        ref="select">
        {this.renderOptions()}
      </select>
    );
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    if(this.props.includeBlank) {
      selectOptions.push(<InputSelectOption name="Selecione" value="" key="empty_option" />);
    }

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      selectOptions.push(<InputSelectOption {...optionProps} key={optionProps.name} />);
    }

    return selectOptions;
  }

});
