var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');

window.InputAutocompleteOption = React.createClass({
  mixins: [CssClassMixin, UtilsMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    selected: React.PropTypes.bool,
    position: React.PropTypes.number,
    isActive: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onOptionMouseEnter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selected: false,
      onSelect: function() {
        return true;
      },
      onOptionMouseEnter: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.parseThemeClassKey(this.props.isActive)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.parseThemeClassKey(nextProps.isActive)
    });
  },

  parseThemeClassKey: function(isActive) {
    var themeClassKey = 'input.autocomplete.option';
    if(isActive) {
      themeClassKey += ' input.autocomplete.option.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      <li className={this.className()} onClick={this.handleSelect} onMouseEnter={this.handleMouseEnter}>
        <InputCheckbox id={this.parseOptionId()} checked={this.props.selected} onChange={this.disableEvent} onClick={this.disableEvent} key={this.generateUUID()} />
        <Label id={this.parseOptionId()} name={this.props.name} />
      </li>
    );
  },

  handleSelect: function(event) {
    var option = {
      name: this.props.name,
      value: this.props.value,
      showOnTop: false
    };

    this.props.onSelect(event, option);
    event.stopPropagation();
  },

  handleMouseEnter: function() {
    this.props.onOptionMouseEnter(this.props.position);
  },

  disableEvent: function(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  parseOptionId: function() {
    return 'autocomplete_option_' + this.props.id + '_' + this.props.value;
  }
});
