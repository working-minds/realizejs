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
      format: null,
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
          value={this.formatDateValue()}
          className={this.className()}
          onChange={this._handleChange}
          onIncomplete={this.handleMaskIncomplete}
          key={this.state.inputMaskedKey}
          ref="input"
        />

        <Label {...this.propsWithoutCSS()} />
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
    return (this.props.format || Realize.i18n.t('date.formats.date'));
  },

  formatDateValue: function() {
    var date = moment(this.state.value, moment.ISO_8601);
    if(date.isValid()) {
      return date.format(this.getDateFormat());
    }

    return this.state.value;
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
    var selectedDate = moment(pickadateObject.select).format();

    this.setState({
      value: selectedDate,
      inputMaskedKey: this.generateUUID()
    }, this.setPickadatePlugin);
  },

  /* Mask event handlers */

  handleMaskIncomplete: function(event) {
    this.setState({value: null});
  },

  _getValue: function() {
    return this.formatDateValue();
  }
});


