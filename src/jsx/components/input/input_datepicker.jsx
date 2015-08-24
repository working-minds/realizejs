var InputDatepicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

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
        <InputMasked {...this.props} type="date" plugin_params={{typeMask: 'date', showMaskOnHover: false}} className={this.className()} ref="input" />
        <Label {...this.propsWithoutCSS()} />
        <Button icon={{type: "calendar"}} className="input-datepicker__button prefix" type="button" ref="button"/>
      </span>
    );
  }
});


