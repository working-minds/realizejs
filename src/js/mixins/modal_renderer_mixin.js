window.ModalRendererMixin = {
  propTypes: {
    modalContainerId: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalContainerId: "modal-container"
    };
  },

  renderModalHtml: function(modalHtml) {
    var modalContainerId = this.props.modalContainerId;

    var $modalContainer = $("#" + modalContainerId);
    if($modalContainer.length === 0) {
      $modalContainer = $("<div id='" + modalContainerId + "'></div>");
      $("body").append($modalContainer);
    }

    $modalContainer.html(modalHtml);
  }
};

module.exports = ModalRendererMixin;