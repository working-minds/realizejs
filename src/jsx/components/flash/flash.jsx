var Flash = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    text: React.PropTypes.string,
    dismissTimeout: React.PropTypes.number,
    canDismiss: React.PropTypes.bool,
    onDismiss: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      type: 'info',
      dismissTimeout: -1,
      canDismiss: true,
      text: '',
      onDismiss: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash flash.' + this.props.type
    }
  },

  componentDidMount: function() {
    if(this.props.dismissTimeout > 0) {
      this.setDismissTimeout();
    }
  },

  render: function() {
    return (
      <div className={this.className()} ref="flash">
        <FlashContent {...this.props} />
        {this.props.canDismiss ? <FlashDismiss {...this.props} onClick={this.handleDismissClick} />: ''}
      </div>
    );
  },

  handleDismissClick: function() {
    this.dismiss(200);
  },

  dismiss: function(duration) {
    var $flashNode = $(React.findDOMNode(this.refs.flash));
    $flashNode.slideUp(duration, function() {
      $flashNode.remove();
      this.props.onDismiss();
    }.bind(this));
  },

  setDismissTimeout: function() {
    setTimeout(function() {
      this.dismiss(800);
    }.bind(this), this.props.dismissTimeout);
  }
});
