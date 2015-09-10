var ModalRendererMixin = {
  propTypes: {
    modalId: React.PropTypes.string,
    modalContainerId: React.PropTypes.string
  },

  getDefaultPropst: function() {
    return {
      modalContainerId: "modal-container"
    };
  },

  renderModalHtml: function(modalHtml) {
    var modalContainerId = this.props.modalContainerId;
    var modalId = this.props.modalId;

    var $modalContainer = $("#" + modalContainerId);
    if($modalContainer.length === 0) {
      $modalContainer = $("<div id='" + modalContainerId + "'></div>");
      $("body").append($modalContainer);
    }

    $modalContainer.html(modalHtml);
    $('#' + modalId).openModal();
  }
};