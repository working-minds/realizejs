'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _input_select_store = require('../../stores/input_select_store');

var _input_select_store2 = _interopRequireDefault(_input_select_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentDidMount: function componentDidMount() {
    _input_select_store2.default.listen(this.inputSelectActionListener);
  },

  inputSelectActionListener: function inputSelectActionListener(storeState) {
    var changedInputId = storeState.inputId;

    if (this.isChangedInput(changedInputId)) {
      var action = storeState.action;
      var actionFunctionName = "handle" + action + "Action";
      this[actionFunctionName](storeState);
    }
  },

  isChangedInput: function isChangedInput(changedInputId) {
    var originalId = this.props.originalId;
    var id = this.props.id;

    return !!originalId && originalId == changedInputId || !!id && id == changedInputId;
  },

  handleSelectAction: function handleSelectAction(storeState) {
    var selectedOption = storeState.selectedOption;
    this.validateSelectedOption(selectedOption);

    this.setState({
      optionsCache: this.cacheSelectedOption(selectedOption),
      value: [selectedOption.value]
    });
  },

  handleSelectSearchValueAction: function handleSelectSearchValueAction(storeState) {
    var searchValue = this.state.searchValue;
    if (typeof searchValue != "string") {
      throw new Error(_i18n2.default.t("errors.invalidAction"));
    }

    storeState.selectedOption = {
      name: searchValue,
      value: searchValue
    };

    this.handleSelectAction(storeState);
    if (typeof this.hideResult == "function") {
      this.hideResult();
    }
  },

  validateSelectedOption: function validateSelectedOption(selectedOption) {
    if ((typeof selectedOption === 'undefined' ? 'undefined' : _typeof(selectedOption)) != "object" || !selectedOption.name || !selectedOption.value) {
      throw new Error(_i18n2.default.t("errors.inputSelect.invalidOption"));
    }
  },

  cacheSelectedOption: function cacheSelectedOption(selectedOption) {
    if (typeof this.cacheOptions == "function") {
      return this.cacheOptions([selectedOption]);
    }
    return this.state.optionsCache;
  }
};