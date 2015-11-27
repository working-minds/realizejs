var ModalButton = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    top: React.PropTypes.number,
    modalId: React.PropTypes.string,
    dismissible: React.PropTypes.bool,
    opacity: React.PropTypes.number,
    inDuration: React.PropTypes.number,
    outDuration: React.PropTypes.number,
    ready: React.PropTypes.func,
    complete: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      top: 0,
      modalId: '',
      dismissible: true,
      className: 'btn',
      opacity: 0.4,
      inDuration: 300,
      outDuration: 200,
      ready: function() { return true; },
      complete: function() { return true; }
    };
  },

  render: function() {
    return (
      <Button {...this.props}
        className={this.getClassName()}
        onClick={this.openModal}
        ref="modalButton"
      />
    );
  },

  getClassName: function() {
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },

  getModalElement: function() {
    return $("#" + this.props.modalId);
  },

  openModal: function(event) {
    event.nativeEvent.preventDefault();
    event.stopPropagation();
    event.preventDefault();

    var $modal = this.getModalElement();
    $modal.openModal({
      top:this.props.top,
      dismissible: this.props.dismissible,  // Modal can be dismissed by clicking outside of the modal
      opacity: this.props.opacity,          // Opacity of modal background
      inDuration: this.props.inDuration,    // Transition in duration
      outDuration: this.props.outDuration,  // Transition out duration
      ready: this.handleReady,              // Callback for Modal open
      complete: this.handleComplete         // Callback for Modal close
    });
  },

  handleReady: function() {
    var $modal = this.getModalElement();
    $modal.trigger('resize');

    if(typeof this.props.ready === "function") {
      this.props.ready();
    }
  },

  handleComplete: function() {
    if(typeof this.props.complete === "function") {
      this.props.complete();
    }
  }

});
