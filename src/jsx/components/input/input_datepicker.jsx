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
      format: 'dd/mm/yyyy'
      //A função abaixo fecha o datepicker quando uma data é selecionada.
      //onSet: function() {
      //  setTimeout(this.close, 0);
      //}
    });
    var picker = input.pickadate('picker');

    $(inputNode).off('click focus');

    $(buttonNode).on('click', function(e) {
      if (picker.get('open')) {
        picker.close()
      } else {
        picker.open()
      }
      e.stopPropagation()
    });
  },

  render: function() {
    return (
    <div className="row">
      <div className="input-field col m2 s12">
        <InputMasked {...this.props} type="date" plugin_params={{ 'typeMask':'date' }} className={this.className()} ref="input" />
        <Button iconProps={{type: "more_horiz"}} className="input-datepicker__button  prefix" ref="button"/>
      </div>
    </div>
    );
  }
});


