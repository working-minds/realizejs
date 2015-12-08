var InputMasked = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin
  ],

  propTypes: {
    mask: React.PropTypes.string,
    maskType: React.PropTypes.string,
    regex: React.PropTypes.string,
    onComplete: React.PropTypes.func,
    onIncomplete: React.PropTypes.func,
    onCleared: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text',
      mask: null,
      maskType: null,
      regex: null,

      onComplete: function() {},
      onIncomplete: function() {},
      onCleared: function() {}
    };
  },

  getInitialState: function() {
    return {
      placeholder: this.getPlaceholder()
    }
  },

  predefinedMasks: function() {
    var localeMasks = Realize.t("masks");
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
        onChange={this.handleChange}
        type="text"
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
    this.applyMask();
  },

  handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var value = $(event.target).inputmask('unmaskedvalue');
      this.setState({value: value});
    }
  },

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
    var predefinedMaskOptions = $.extend({}, this.parseMaskOptions(), predefinedMask);

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

    maskOptions.oncomplete = this.props.onComplete;
    maskOptions.onincomplete = this.props.onIncomplete;
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
      this.setState({ placeholder: appliedPlaceholder });
    }
  }
});