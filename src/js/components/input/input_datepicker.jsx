var InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    mask: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker',
      mask: null
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
          type="date"
          className={this.className()}
          onChange={this._handleChange}
          maskType="date"
          ref="input"
        />

        <Label {...this.propsWithoutCSS()} />
        <Button
          disabled={this.props.disabled}
          icon={{type: "calendar"}}
          className="input-datepicker__button prefix"
          onClick={this.handleCalendarClick}
          type="button"
          ref="button"
        />
      </span>
    );
  },

  getMask: function() {
    return (this.props.mask || Realize.t('masks.date').placeholder);
  },

  setPickadatePlugin: function() {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    $inputNode.pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getMask()
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
    // d -> D, m -> M, y -> Y, h -> H, s -> m
    var date = moment(this.props.value);
    var formattedValue = date.format(this.getMask().toUpperCase());
    if(formattedValue == "Invalid date") {
      return this.props.value;
    }

    return formattedValue;
  }
});


