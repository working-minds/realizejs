var InputAutocompleteList = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    active: React.PropTypes.number,
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
        {this.renderOnTopSelectedOptions()}
        {this.renderOtherOptions()}
      </ul>
    );
  },

  renderOnTopSelectedOptions: function() {
    var selectedOptions = $.map(this.props.selectedOptions, function(selectedOption) {
      var option = $.extend({}, selectedOption);

      option.selected = true;
      return option;
    });

    return this.renderOptions($.grep(selectedOptions, function(option) {
      return !!option.showOnTop;
    }));
  },

  renderOtherOptions: function() {
    var otherOptions = $.map(this.props.options, function(option) {
      var otherOption = $.extend({}, option);
      var relatedSelectedOption = $.grep(this.props.selectedOptions, function(selectedOption) {
        return selectedOption.value == otherOption.value;
      })[0];

      if(!!relatedSelectedOption) {
        otherOption.selected = true;
        otherOption.showOnTop = relatedSelectedOption.showOnTop;
      }

      return otherOption;
    }.bind(this));

    return this.renderOptions($.grep(otherOptions, function(option) {
      return !option.showOnTop;
    }));
  },

  renderOptions: function(options) {
    var listOptions = [];

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
