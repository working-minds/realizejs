var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.ModalButton = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    modalId: React.PropTypes.string,
    openerId: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: '',
      openerId: ''
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
    if(this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },

  openModal: function(event) {
    event.nativeEvent.preventDefault();
    event.stopPropagation();
    event.preventDefault();

    ModalActions.open(this.props);
  }

});
