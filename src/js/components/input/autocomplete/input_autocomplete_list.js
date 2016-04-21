var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputAutocompleteList = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    selectedOptions: React.PropTypes.array,
    options: React.PropTypes.array,
    active: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.autocomplete.list',
      options: [],
      selectedOptions: [],
      onSelect: function() {
        return true;
      },
      onOptionMouseEnter: function() {
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
    var options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
    var listOptions = [];

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      listOptions.push(
        <InputAutocompleteOption {...optionProps}
          onSelect={this.props.onSelect}
          onOptionMouseEnter={this.props.onOptionMouseEnter}
          position={i}
          isActive={i == this.props.active}
          id={this.props.id}
          key={optionProps.name}
          ref={"option_" + i}
        />
      );
    }

    return listOptions;
  },

  onTopSelectedOptions: function() {
    var selectedOptions = $.map(this.props.selectedOptions, function(selectedOption) {
      var option = $.extend({}, selectedOption);

      option.selected = true;
      return option;
    });

    return $.grep(selectedOptions, function(option) {
      return !!option.showOnTop;
    });
  },

  otherOptions: function() {
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

    return $.grep(otherOptions, function(option) {
      return !option.showOnTop;
    });
  }
});
