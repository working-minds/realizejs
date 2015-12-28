var InputDatefilterSelect = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    InputComponentMixin
  ],

  propTypes: {
    selectedDates: React.PropTypes.array,
    placeholder: Realize.PropTypes.localizedString,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selectedDates: [],
      themeClassKey: 'input.datefilter.select',
      placeholder: 'select'
    };
  },

  //TODO: este e um componente do materialize. Tornar este componente generico.
  render: function() {
    return (
      <div>
        <div className={this.className()}>
          <span className="caret">▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedDates()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            key={"datefilter_select_" + this.generateUUID()}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  },

  selectId: function() {
    return 'datefilter_select_' + this.props.id;
  },

  renderSelectedDates: function() {
    var dates = this.props.selectedDates;
    return dates.join(' - ');
  }
});
