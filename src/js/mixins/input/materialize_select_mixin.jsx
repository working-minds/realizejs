window.MaterializeSelectMixin = {
  componentDidMount: function() {
    this.applyMaterialize(true);
  },

  componentDidUpdate: function(previousProps, previousState) {
    if(this.state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  applyMaterialize: function(onMount) {
    var selectElement = ReactDOM.findDOMNode(this.refs.select);
    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

    if(!onMount) {
      this.handleChangeMaterialize(selectElement);
    }
  },

  handleChangeMaterialize: function(selectElement) {
    var $selectElement = $(selectElement);
    var fakeEvent = {
      currentTarget: selectElement,
      target: selectElement
    };

    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    this.setState({
      value: this.ensureIsArray(selectElement.value)
    }, this.triggerDependableChanged);

    this.props.onChange(fakeEvent);
  }
};

module.exports = MaterializeSelectMixin;