var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputDatefilterSelect = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    InputComponentMixin
  ],

  propTypes: {
    selectedDates: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selectedDates: [],
      themeClassKey: 'input.datefilter.select',
      placeholder: 'select'
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
            value={this.renderSelectedDates()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            ref="select"
            key={"datefilter_select_" + this.generateUUID()}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  },

  renderSelectedDates: function() {
    var dates = this.props.selectedDates;
    return dates.join(' - ');
  },

  selectId: function() {
    return 'datefilter_select_' + this.props.id;
  },

  focusSelect: function() {
    var selectInput = ReactDOM.findDOMNode(this.refs.select);
    selectInput.focus();
  }
});
