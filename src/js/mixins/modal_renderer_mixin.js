import PropTypes from '../prop_types';
import $ from 'jquery';

export default {
  propTypes: {
    modalContainerId: PropTypes.string
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
}
