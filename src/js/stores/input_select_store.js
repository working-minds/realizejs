var InputSelectStore = Reflux.createStore({
  listenables: [InputSelectActions],

  inputId: '',
  selectedOption: {},

  onSelect: function(inputId, selectedOption) {
    this.inputId = inputId;
    this.selectedOption = selectedOption;

    this.trigger(this);
  }
});