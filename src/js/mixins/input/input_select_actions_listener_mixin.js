import i18n from '../../i18n';
import InputSelectStore from '../../stores/input_select_store';

export default {
  componentDidMount() {
    InputSelectStore.listen(this.inputSelectActionListener);
  },

  inputSelectActionListener(storeState) {
    const changedInputId = storeState.inputId;

    if (this.isChangedInput(changedInputId)) {
      const action = storeState.action;
      const actionFunctionName = `handle${action}Action`;
      this[actionFunctionName](storeState);
    }
  },

  isChangedInput(changedInputId) {
    const originalId = this.props.originalId;
    const id = this.props.id;

    return (!!originalId && originalId === changedInputId) ||
           (!!id && id === changedInputId);
  },

  handleSelectAction(storeState) {
    const selectedOption = storeState.selectedOption;
    this.validateSelectedOption(selectedOption);

    this.setState({
      optionsCache: this.cacheSelectedOption(selectedOption),
      value: [selectedOption.value],
    });
  },

  handleSelectSearchValueAction(storeState) {
    const searchValue = this.state.searchValue;
    if (typeof searchValue !== 'string') {
      throw (new Error(i18n.t('errors.invalidAction')));
    }

    storeState.selectedOption = {
      name: searchValue,
      value: searchValue,
    };

    this.handleSelectAction(storeState);
    if (typeof this.hideResult === 'function') {
      this.hideResult();
    }
  },

  validateSelectedOption(selectedOption) {
    if (typeof selectedOption !== 'object' || !selectedOption.name || !selectedOption.value) {
      throw (new Error(i18n.t('errors.inputSelect.invalidOption')));
    }
  },

  cacheSelectedOption(selectedOption) {
    if (typeof this.cacheOptions === 'function') {
      return this.cacheOptions([selectedOption]);
    }
    return this.state.optionsCache;
  },
};
