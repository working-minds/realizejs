var InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    format: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datepicker'
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    var buttonNode = React.findDOMNode(this.refs.button);

    var input = $(inputNode).pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true ,
      format: Realize.t('masks.date')
    });

    var picker = input.pickadate('picker');
    picker.on('close', this.props.onChange);

    // TODO: should close on date click - materialize currently broke it
    $(buttonNode).on('click', function(e) {
      if (picker.get('open')) {
        picker.close();
      } else {
        picker.open();
      }
      e.stopPropagation();
    });
  },

  render: function() {
    return (
      <span>
        <InputMasked {...this.props} value={this.formatDateValue()} type="date" className={this.className()} onChange={this._handleChange} plugin_params={{typeMask: 'date', showMaskOnHover: false}} ref="input" />
        <Label {...this.propsWithoutCSS()} />
        <Button disabled={this.props.disabled} icon={{type: "calendar"}} className="input-datepicker__button prefix" type="button" ref="button"/>
      </span>
    );
  },

  formatDateValue: function() {
    var date = moment(this.props.value);
    var formattedValue = date.format(Realize.t('masks.date').toUpperCase());
    if(formattedValue == "Invalid date") {
      return this.props.value;
    }

    return formattedValue;
  }
});


