var ModalActions = require('realize/actions/modal_actions.js');

var ModalStore = Reflux.createStore({
  listenables: [ModalActions],
  optionProps: [
    'dismissible', 'opacity', 'inDuration', 'outDuration', 'ready', 'complete'
  ],

  modalId: '',
  openerId: '',
  shouldOpen: false,
  options: {},

  onOpen: function(props) {
    this.modalId = props.modalId;
    this.openerId = props.openerId;
    this.shouldOpen = true;
    this.shouldClose = false;
    this.options = $.grep(props, function(prop) {
      return (this.optionProps.indexOf(prop) > 0);
    }.bind(this));

    this.trigger(this);
  },

  onOpenFinished: function() {
    this.shouldOpen = false;

    this.trigger(this);
  },

  onClose: function(props) {
    this.modalId = props.modalId;
    this.shouldOpen = false;
    this.shouldClose = true;

    this.trigger(this);
  }

});

module.exports = ModalStore;
window.ModalStore = ModalStore;