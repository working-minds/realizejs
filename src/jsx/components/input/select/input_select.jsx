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
      themeClassKey: 'input.select'
    };
  },

  render: function() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.selectedValue()}
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
  },

  selectedValue: function() {
    var value = this.state.value;
    if(!this.props.multiple) {
      value = value[0];
    }

    return value;
  },

  handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var selectElement = React.findDOMNode(this.refs.select);

      this.setState({
        value: this.ensureIsArray(selectElement.value)
      }, this.triggerDependableChanged);
    }
  }

});
