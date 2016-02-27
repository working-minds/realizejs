var InputSelectStore = require('realize/stores/input_select_store.js');

window.InputSelectActionsListenerMixin = {
  componentDidMount: function() {
    InputSelectStore.listen(this.inputSelectActionListener);
  },

  inputSelectActionListener: function(storeState) {
    var changedInputId = storeState.inputId;

    if(this.isChangedInput(changedInputId)) {
      var action = storeState.action;
      var actionFunctionName = "handle" + action + "Action";
      this[actionFunctionName](storeState);
    }
  },

  isChangedInput: function(changedInputId) {
    var originalId = this.props.originalId;
    var id = this.props.id;

    return (!!originalId && originalId == changedInputId) ||
           (!!id && id == changedInputId);
  },

  handleSelectAction: function(storeState) {
    var selectedOption = storeState.selectedOption;
    this.validateSelectedOption(selectedOption);

    this.setState({
      optionsCache: this.cacheSelectedOption(selectedOption),
      value: [selectedOption.value]
    });
  },

  handleSelectSearchValueAction: function(storeState) {
    var searchValue = this.state.searchValue;
    if(typeof searchValue != "string") {
      throw(new Error(Realize.i18n.t("errors.invalidAction")));
    }

    storeState.selectedOption = {
      name: searchValue,
      value: searchValue
    };

    this.handleSelectAction(storeState);
    if(typeof this.hideResult == "function") {
      this.hideResult();
    }
  },

  validateSelectedOption: function(selectedOption) {
    if(typeof selectedOption != "object" || !selectedOption.name || !selectedOption.value) {
      throw(new Error(Realize.i18n.t("errors.inputSelect.invalidOption")));
    }
  },

  cacheSelectedOption: function(selectedOption) {
    if(typeof this.cacheOptions == "function") {
      return this.cacheOptions([selectedOption])
    }
    return this.state.optionsCache;
  }
};

module.exports = InputSelectActionsListenerMixin;