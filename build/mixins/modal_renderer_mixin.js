'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    modalContainerId: _prop_types2.default.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      modalContainerId: "modal-container"
    };
  },

  renderModalHtml: function renderModalHtml(modalHtml) {
    var modalContainerId = this.props.modalContainerId;

    var $modalContainer = (0, _jquery2.default)("#" + modalContainerId);
    if ($modalContainer.length === 0) {
      $modalContainer = (0, _jquery2.default)("<div id='" + modalContainerId + "'></div>");
      (0, _jquery2.default)("body").append($modalContainer);
    }

    $modalContainer.html(modalHtml);
  }
};