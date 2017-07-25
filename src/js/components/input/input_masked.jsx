var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputMasked = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin
  ],

  propTypes: {
    type: React.PropTypes.string,
    mask: React.PropTypes.string,
    maskType: React.PropTypes.string,
    regex: React.PropTypes.string,
    autoUnmask: React.PropTypes.bool,
    removeMaskOnChange: React.PropTypes.bool,
    onComplete: React.PropTypes.func,
    onIncomplete: React.PropTypes.func,
    onCleared: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      type: 'text',
      mask: null,
      maskType: null,
      regex: null,
      autoUnmask: false,
      onComplete: function() { },
      onIncomplete: function() { },
      onCleared: function() { }
    };
  },

  getInitialState: function() {
    return {
      placeholder: this.getPlaceholder(),
      applyMask: true
    }
  },

  predefinedMasks: function() {
    var localeMasks = Realize.i18n.t("masks");
    var predefinedMasks = {};

    for(var maskName in localeMasks) {
      if(localeMasks.hasOwnProperty(maskName)) {
        var mask = localeMasks[maskName];
        if(typeof mask == "string") {
          predefinedMasks[maskName] = {
            mask: mask
          }
        } else if(typeof mask == "object") {
          predefinedMasks[maskName] = mask;
        }
      }
    }

    return predefinedMasks;
  },

  render: function() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        placeholder={this.state.placeholder}
        className={this.inputClassName()}
        onKeyUp={this.handleChange}
        onFocus={this._handleFocus}
        ref="input">

        {this.props.children}
      </input>
    );
  },

  componentDidMount: function() {
    var appliedMask = this.applyMask();
    this.setMaskPlaceholder(appliedMask);
  },

  componentDidUpdate: function() {
    if(this.state.applyMask) {
      this.applyMask();
    }
  },

  /* input mask functions */

  applyMask: function() {
    var appliedMask = {};
    if(!!this.props.regex) {
      appliedMask = this.applyRegexMask();
    } else {
      appliedMask = this.applyBaseMask();
    }

    return appliedMask;
  },

  applyRegexMask: function() {
    var $input = $(this.getInputElement());
    var maskOptions = this.parseMaskOptions();

    $input.inputmask('Regex', maskOptions);
    return maskOptions;
  },

  applyBaseMask: function() {
    var maskType = this.props.maskType;
    var predefinedMasks = this.predefinedMasks();
    var predefinedMask = predefinedMasks[maskType];

    var appliedMask = {};
    if(!!predefinedMask) {
      appliedMask = this.applyPredefinedMask(predefinedMask);
    } else {
      appliedMask = this.applyCustomMask();
    }

    return appliedMask;
  },

  applyPredefinedMask: function(predefinedMask) {
    var $input = $(this.getInputElement());
    var predefinedMaskOptions = $.extend({}, predefinedMask, this.parseMaskOptions());

    $input.inputmask(predefinedMaskOptions);
    return predefinedMaskOptions;
  },

  applyCustomMask: function() {
    var $input = $(this.getInputElement());
    var maskOptions = this.parseMaskOptions();

    $input.inputmask(maskOptions);
    this.setMaskPlaceholder(maskOptions);
    return maskOptions;
  },

  getInputElement: function() {
    return ReactDOM.findDOMNode(this.refs.input);
  },

  parseMaskOptions: function() {
    var maskOptions = $.extend({
      showMaskOnHover: false,
      clearIncomplete: true
    }, this.filterMaskOptionProps());

    maskOptions.oncomplete = this.handleComplete;
    maskOptions.onincomplete = this.handleIncomplete;
    maskOptions.oncleared = this.props.onCleared;

    return maskOptions;
  },

  filterMaskOptionProps: function() {
    var maskOptionProps = {};
    var propsToFilter = ['onComplete', 'onIncomplete', 'onCleared'];
    for(var propName in this.props) {
      if(this.props.hasOwnProperty(propName)) {
        var prop = this.props[propName];
        if(!!prop && propsToFilter.indexOf(propName) < 0) {
          maskOptionProps[propName] = prop;
        }
      }
    }

    return maskOptionProps;
  },

  setMaskPlaceholder: function(appliedMaskOptions) {
    var appliedPlaceholder = appliedMaskOptions.placeholder;

    if(!!appliedPlaceholder) {
      this.setState({
        placeholder: appliedPlaceholder,
        applyMask: true
      });
    }
  },

  getUnmaskedValue: function () {
    const $el = $(this.getInputElement())
    return $el.inputmask('unmaskedvalue')
  },


  /* event handlers */

  handleComplete: function(event) {
    this.props.onComplete(event);
    this.updateValue(event.target.value);
  },

  handleIncomplete: function(event) {
    this.props.onIncomplete(event);
    this.updateValue(null);
  },

  handleChange: function(event) {
    var maskedValue = event.target.value
    var value = this.props.removeMaskOnChange ? this.getUnmaskedValue() : maskedValue
    this.props.onChange(event, value, this);

    if(!event.isDefaultPrevented()) {
      this.updateValue(maskedValue);
    }
  },

  updateValue: function(value) {
    this.setState({
      value: value,
      applyMask: false
    });
  }
});
