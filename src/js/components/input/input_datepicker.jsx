var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

var moment = require('realize/momentWithLocale.js');

window.InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin, UtilsMixin],
  propTypes: {
    mask: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker',
      mask: null,
      dateFormat: null,
      maskType: 'date'
    };
  },

  getInitialState: function() {
    return {
      inputMaskedKey: this.generateUUID()
    };
  },

  componentDidMount: function() {
    var currentLocale = Realize.i18n.currentLocale.toLowerCase();
    moment.locale(currentLocale);
    this.setPickadatePlugin();
  },

  render: function() {
    return (
      <span>
        <InputMasked
          {...this.props}
          value={this.getFormattedDateValue()}
          className={this.className()}
          onChange={this._handleChange}
          onIncomplete={this.handleMaskIncomplete}
          key={this.state.inputMaskedKey}
          ref="input"
        />

        <Label {...this.propsWithoutCSS()} active={this.labelIsActive()} />
        <Button
          disabled={this.props.disabled || this.props.readOnly}
          icon={{type: "calendar"}}
          className="input-datepicker__button prefix"
          onClick={this.handleCalendarClick}
          type="button"
          ref="button"
        />
      </span>
    );
  },

  getDateFormat: function() {
    // TODO: remover deprecation warning na major version
    if (this.props.format && console && console.warn) {
      console.warn('Prop "format" of component "InputDatepicker" is deprecated. Use "dateFormat" instead.')
    }
    return (this.props.dateFormat || Realize.i18n.t('date.formats.date'));
  },

  getFormattedDateValue: function() {
    if(!this.state.value) {
      return this.state.value;
    }

    var date = moment.utc(this.state.value, moment.ISO_8601);
    if(date.isValid()) {
      return date.format(this.getDateFormat());
    } else {
      date = moment.utc(this.state.value);
      if(date.isValid()) {
        return date.format(this.getDateFormat());
      }
    }

    return this.state.value;
  },

  labelIsActive: function() {
    let inputValue = this.state.value;

    return (inputValue != null && String(inputValue).length > 0);
  },

  /* Pickadate handlers */

  setPickadatePlugin: function() {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    $inputNode.pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase(),
      onSet: this.handlePickadateSet
    });

    var picker = $inputNode.pickadate('picker');
    picker.on('close', this.props.onChange);
  },

  handleCalendarClick: function(event) {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    var picker = $inputNode.pickadate('picker');

    // TODO: should close on date click - materialize currently broke it
    if(picker.get('open')) {
      picker.close();
    } else {
      picker.open();
    }

    event.stopPropagation();
  },

  handlePickadateSet: function(pickadateObject) {
    this.state.value = moment.utc(pickadateObject.select).format();
    this.props.onChange(null, this.getFormattedDateValue(), this);

    this.setState({
      inputMaskedKey: this.generateUUID()
    }, this.setPickadatePlugin);
  },

  /* Mask event handlers */

  handleMaskIncomplete: function(event) {
    this.setState({value: null});
  },

  _getValue: function() {
    return this.getFormattedDateValue();
  }
});
