var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
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

  componentDidMount: function() {
    this.setPickadatePlugin();
  },

  render: function() {
    return (
      <span>
        <InputMasked
          {...this.props}
          value={this.formatDateValue()}
          className={this.className()}
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

  setPickadatePlugin: function() {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    $inputNode.pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase()
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

  formatDateValue: function() {
    var date = moment(this.props.value);
    var formattedValue = date.format(this.getDateFormat());
    if(formattedValue == "Invalid date") {
      return this.props.value;
    }

    return formattedValue;
  }
});


