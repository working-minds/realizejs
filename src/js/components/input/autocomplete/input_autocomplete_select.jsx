var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputAutocompleteSelect = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    InputComponentMixin
  ],

  propTypes: {
    selectedOptions: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      selectedOptions: [],
      themeClassKey: 'input.autocomplete.select',
      placeholder: 'select'
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
          <span className="caret" onClick={this.focusSelect}>▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedOptions()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            ref="select"
            key={"autocomplete_select_" + this.generateUUID()}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  },

  renderSelectedOptions: function() {
    var options = this.props.selectedOptions;

    return $.map(options, function(option) {
      return option.name;
    }).join(', ');
  },

  selectId: function() {
    return 'autocomplete_select_' + this.props.id;
  },

  focusSelect: function() {
    var selectInput = ReactDOM.findDOMNode(this.refs.select);
    selectInput.focus();
  }
});
