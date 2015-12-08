var ModalStore = Reflux.createStore({
  listenables: [ModalActions],
  optionProps: [
    'dismissible', 'opacity', 'inDuration', 'outDuration', 'ready', 'complete'
  ],

  modalId: '',
  shouldOpen: false,
  options: {},

  onOpen: function(props) {
    this.modalId = props.modalId;
    this.shouldOpen = true;
    this.options = $.grep(props, function(prop) {
      return (this.optionProps.indexOf(prop) > 0);
    }.bind(this));

    this.trigger(this);
  },

  onOpenFinished: function() {
    this.shouldOpen = false;
    this.trigger(this);
  }
});