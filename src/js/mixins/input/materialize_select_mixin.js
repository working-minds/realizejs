import ReactDOM from 'react-dom';
import $ from 'jquery';

export default {
  componentDidMount() {
    this.applyMaterialize(true);
  },

  componentDidUpdate(previousProps, previousState) {
      const bothEmpty = this.state.options.length === 0 && previousState.options.length === 0;
      const optionsChanged = !bothEmpty && this.state.options !== previousState.options;

      if (optionsChanged) {
          this.applyMaterialize();
      }
  },

  applyMaterialize(onMount) {
    const selectElement = ReactDOM.findDOMNode(this.select);
    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

    if (!onMount) {
      this.handleChangeMaterialize(selectElement);
    }
  },

  handleChangeMaterialize(selectElement) {
    const $selectElement = $(selectElement);
    const newValue = this.ensureIsArray(selectElement.value);
    const fakeEvent = {
      currentTarget: selectElement,
      target: selectElement,
    };

    // Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    this.setState({
      value: newValue,
    }, this.triggerDependableChanged);

    this.props.onChange(fakeEvent, newValue, this);
  },
};
