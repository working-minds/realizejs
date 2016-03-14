var InputSelectActions = require('realize/actions/input_select_actions.js');

var InputSelectStore = Reflux.createStore({
  listenables: [InputSelectActions],

  action: '',
  inputId: '',
  selectedOption: {},

  onSelect: function(inputId, selectedOption) {
    this.action = 'Select';
    this.inputId = inputId;
    this.selectedOption = selectedOption;

    this.trigger(this);
  },

  onSelectSearchValue: function(inputId) {
    this.action = 'SelectSearchValue';
    this.inputId = inputId;
    this.selectedOption = {};

    this.trigger(this);
  }
});

module.exports = InputSelectStore;
window.InputSelectStore = InputSelectStore;