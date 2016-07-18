'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _input_select_actions = require('../actions/input_select_actions');

var _input_select_actions2 = _interopRequireDefault(_input_select_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  listenables: [_input_select_actions2.default],

  action: '',
  inputId: '',
  selectedOption: {},

  onSelect: function onSelect(inputId, selectedOption) {
    this.action = 'Select';
    this.inputId = inputId;
    this.selectedOption = selectedOption;

    this.trigger(this);
  },

  onSelectSearchValue: function onSelectSearchValue(inputId) {
    this.action = 'SelectSearchValue';
    this.inputId = inputId;
    this.selectedOption = {};

    this.trigger(this);
  }
});