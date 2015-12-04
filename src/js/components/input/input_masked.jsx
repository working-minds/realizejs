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
      mask: '',
      maskType: null,
      regex: null,

      onComplete: function() {},
      onIncomplete: function() {},
      onCleared: function() {}
    };
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
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this._handleChange}
        type="text"
        ref="input">

        {this.props.children}
      </input>
    );
  },

  componentDidMount: function() {
    if(!!this.props.regex) {
      this.applyRegexMask();
    } else {
      this.applyMask();
    }
  },

  applyRegexMask: function() {
    var $input = $(this.getInputElement());
    $input.inputmask('Regex', this.parseMaskOptions());
  },

  applyMask: function() {
    var maskType = this.props.maskType;
    var predefinedMasks = this.predefinedMasks();
    var predefinedMask = predefinedMasks[maskType];

    if(!!predefinedMask) {
      this.applyPredefinedMask(predefinedMask);
    } else {
      this.applyCustomMask();
    }
  },

  applyPredefinedMask: function(predefinedMask) {
    var $input = $(this.getInputElement());
    var predefinedMaskOptions = $.extend({}, this.parseMaskOptions(), predefinedMask);

    $input.inputmask(predefinedMaskOptions);
  },

  applyCustomMask: function() {
    var $input = $(this.getInputElement());
    $input.inputmask(this.parseMaskOptions());
  },

  getInputElement: function() {
    return ReactDOM.findDOMNode(this.refs.input);
  },

  parseMaskOptions: function() {
    var maskOptions = $.extend({}, this.props);
    maskOptions.oncomplete = this.props.onComplete;
    maskOptions.onincomplete = this.props.onIncomplete;
    maskOptions.oncleared = this.props.onCleared;

    return maskOptions;
  }
});