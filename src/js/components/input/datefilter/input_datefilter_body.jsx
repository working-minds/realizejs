var InputDatefilterBody = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    fromFilterInput: React.PropTypes.object,
    toFilterInput: React.PropTypes.object,
    okButton: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datefilter.body',
      id: null,
      name: null,
      resource: null,
      fromFilterInput: {},
      toFilterInput: {},
      okButton: {
        name: 'actions.ok'
      }
    };
  },

  /* Renderers */

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderFromInput()}
        {this.renderToInput()}
        {this.renderUpdateButton()}
      </div>
    );
  },

  renderFromInput: function() {
    return (
      <div className="input-datefilter__filter">
        <Input {...this.fromInputProps()}
          component="datepicker"
          ref="fromInput"
        />
      </div>
    );
  },

  fromInputProps: function() {
    return this.filterInputProps("from");
  },

  renderToInput: function() {
    return (
      <div className="input-datefilter__filter">
        <Input {...this.toInputProps()}
          component="datepicker"
          ref="toInput"
        />
      </div>
    );
  },

  toInputProps: function() {
    return this.filterInputProps("to");
  },

  renderUpdateButton: function() {
    return (
      <div className="input-datefilter__button">
        <Button name="update" element="a" />
      </div>
    );
  },

  /* Date selection handlers */

  selectDate: function(event) {
    var $fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput));
    var $toInput = $(ReactDOM.findDOMNode(this.refs.toInput));

    console.log($fromInput.val());
    console.log($toInput.val());
  },

  /* Props parser methods */

  filterInputProps: function(filterType) {
    var inputProps = {
      formStyle: 'oneLine',
      resource: this.props.resource,
      id: this.getFilterInputId(filterType),
      name: this.getFilterInputName(filterType),
      label: this.getFilterInputLabel(filterType)
    };

    $.extend(inputProps, this.props[filterType + "FilterInput"]);
    return inputProps;
  },

  getFilterInputId: function(filterType) {
    var inputId = this.props.id;
    if(!!inputId) {
      return (inputId + "_" + filterType);
    }

    return null;
  },

  getFilterInputName: function(filterType) {
    var inputName = this.props.name;
    if(!!inputName) {
      return (inputName + "_" + filterType);
    }

    return null;
  },

  getFilterInputLabel: function(filterType) {
    return Realize.t("inputs.datefilter." + filterType);
  }
});