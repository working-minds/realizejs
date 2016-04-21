var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var SelectComponentMixin = require('realize/mixins/input/select_component_mixin.jsx');
var InputSelectActionsListenerMixin = require('realize/mixins/input/input_select_actions_listener_mixin.jsx');
var MaterializeSelectMixin = require('realize/mixins/input/materialize_select_mixin.jsx');

window.InputSelect = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin,
    InputSelectActionsListenerMixin,
    MaterializeSelectMixin
  ],

  propTypes: {
    includeBlank: React.PropTypes.bool,
    blankText: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      themeClassKey: 'input.select',
      blankText: 'select'
    };
  },

  componentDidMount: function() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function() {
    var valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  clearSelection: function() {
    this.setState({
      value: []
    }, this.triggerDependableChanged);
  },

  render: function() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.selectedValue()}
        onChange={this.handleChange}
        disabled={this.isDisabled() || this.props.readOnly}
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
      selectOptions.push(<InputSelectOption name={Realize.i18n.t(this.props.blankText)} value="" key="empty_option" />);
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
    var selectElement = ReactDOM.findDOMNode(this.refs.select);
    var newValue = this.ensureIsArray(selectElement.value);
    this.props.onChange(event, newValue, this);

    if(!event.isDefaultPrevented()) {
      this.setState({
        value: newValue
      }, this.triggerDependableChanged);
    }
  }

});
