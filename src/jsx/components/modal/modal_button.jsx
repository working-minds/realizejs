var ModalButton = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    top: React.PropTypes.number,
    text: React.PropTypes.string,
    modal_id: React.PropTypes.string,
    dismissible: React.PropTypes.bool,
    opacity: React.PropTypes.number,
    in_duration: React.PropTypes.number,
    out_duration: React.PropTypes.number,
    ready: React.PropTypes.func,
    complete: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      top:0,
      dismissible: true,
      text:'Modal',
      className: 'btn',
      opacity: 0,
      in_duration: 300,
      out_duration: 200,
      ready: function(){return true;},
      complete: function(){return true;}
    };
  },

  render: function() {
    return (
        <Button {...this.props} data-target={this.props.modal_id} className={this.getClassName()} ref="modalButton">{this.props.text}</Button>
    );
  },

  getClassName: function(){
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },


  componentDidMount: function(){
    $(React.findDOMNode(this.refs.modalButton)).attr('data-target',this.props.modal_id);

    $(React.findDOMNode(this.refs.modalButton)).click(function(e){
      e.stopPropagation();
      e.preventDefault();
    });
    $(React.findDOMNode(this.refs.modalButton)).leanModal({
        top:this.props.top,
        dismissible: this.props.dismissible, // Modal can be dismissed by clicking outside of the modal
        opacity: this.props.opacity, // Opacity of modal background
        in_duration: this.props.in_duration, // Transition in duration
        out_duration: this.props.out_duration, // Transition out duration
        ready: this.props.ready, // Callback for Modal open
        complete: this.props.complete // Callback for Modal close,
      }
    );
  }

});
