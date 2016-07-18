'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _modal_actions = require('../actions/modal_actions');

var _modal_actions2 = _interopRequireDefault(_modal_actions);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  listenables: [_modal_actions2.default],
  optionProps: ['dismissible', 'opacity', 'inDuration', 'outDuration', 'ready', 'complete'],

  modalId: '',
  openerId: '',
  shouldOpen: false,
  options: {},

  onOpen: function onOpen(props) {
    this.modalId = props.modalId;
    this.openerId = props.openerId;
    this.shouldOpen = true;
    this.shouldClose = false;
    this.options = _jquery2.default.grep(props, function (prop) {
      return this.optionProps.indexOf(prop) > 0;
    }.bind(this));

    this.trigger(this);
  },

  onOpenFinished: function onOpenFinished() {
    this.shouldOpen = false;

    this.trigger(this);
  },

  onClose: function onClose(props) {
    this.modalId = props.modalId;
    this.shouldOpen = false;
    this.shouldClose = true;

    this.trigger(this);
  }

});