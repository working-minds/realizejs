var InputSelectActionsListenerMixin = {
  componentDidMount: function() {
    InputSelectStore.listen(this.inputSelectActionListener);
  },

  inputSelectActionListener: function(storeState) {
    var changedInputId = storeState.inputId;
    var selectedOption = storeState.selectedOption;

    if(this.isChangedInput(changedInputId)) {
      this.setState({
        optionsCache: this.cacheSelectedOption(selectedOption),
        value: selectedOption.value
      });
    }
  },

  isChangedInput: function(changedInputId) {
    var originalId = this.props.originalId;
    var id = this.props.id;

    return (!!originalId && originalId == changedInputId) ||
           (!!id && id == changedInputId);
  },

  cacheSelectedOption(selectedOption) {
    if(typeof this.cacheOptions == "function") {
      return this.cacheOptions([selectedOption])
    }
    return this.state.optionsCache;
  }
};