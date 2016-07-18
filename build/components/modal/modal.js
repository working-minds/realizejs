'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _modal_header = require('./modal_header');

var _modal_header2 = _interopRequireDefault(_modal_header);

var _modal_content = require('./modal_content');

var _modal_content2 = _interopRequireDefault(_modal_content);

var _modal_footer = require('./modal_footer');

var _modal_footer2 = _interopRequireDefault(_modal_footer);

var _mixins = require('../../mixins');

var _stores = require('../../stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_dec = (0, _decorators.mixin)(_reflux2.default.connect(_stores.ModalStore, 'modalStore'), _mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      modalStore: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeContent();
      (0, _jquery2.default)(window).on('resize', this.resizeContent);

      if (!!this.props.opened) {
        this.open();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)(window).off('resize', this.resizeContent);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.resizeContent();
      if (!!this.state.opened) {
        this.open();
      }

      if (this.state.modalStore) {
        this.handleModalStoreState();
      }
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _react2.default.createElement(
        'div',
        { ref: 'headerContainer', className: 'modal-header-container' },
        this.filterChildren(_modal_header2.default)
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2.default.createElement(
        'div',
        { ref: 'contentContainer', className: 'modal-content-container' },
        this.filterChildren(_modal_content2.default)
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return _react2.default.createElement(
        'div',
        { ref: 'footerContainer', className: 'modal-footer-container' },
        this.filterChildren(_modal_footer2.default)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var header = this.filterChildren(_modal_header2.default) ? this.renderHeader() : '';
      var content = this.filterChildren(_modal_content2.default) ? this.renderContent() : '';
      var footer = this.filterChildren(_modal_footer2.default) ? this.renderFooter() : '';

      if (header == '' && content == '' && footer == '') content = _react2.default.createElement(
        _modal_content2.default,
        this.props,
        this.props.children
      );

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.className(), ref: 'modal' },
        header,
        content,
        footer
      );
    }
  }, {
    key: 'handleModalStoreState',
    value: function handleModalStoreState() {
      var modalStore = this.state.modalStore;
      var shouldOpenModal = modalStore.shouldOpen;
      var shouldCloseModal = modalStore.shouldClose;
      var modalToOpenId = modalStore.modalId;

      if (modalToOpenId == this.props.id) {
        if (shouldOpenModal) {
          this.open();
        }

        if (shouldCloseModal) {
          this.close();
        }
      }
    }
  }, {
    key: 'open',
    value: function open(options) {
      var $modal = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.modal));

      $modal.openModal({
        dismissible: this.props.dismissible, // Modal can be dismissed by clicking outside of the modal
        opacity: this.props.opacity, // Opacity of modal background
        inDuration: this.props.inDuration, // Transition in duration
        outDuration: this.props.outDuration, // Transition out duration
        ready: this.handleReady, // Callback for Modal open
        complete: this.props.complete // Callback for Modal close
      });
    }
  }, {
    key: 'handleReady',
    value: function handleReady() {
      this.resizeContent();
      ModalActions.openFinished();

      if (typeof this.props.ready === "function") {
        this.props.ready();
      }
    }
  }, {
    key: 'close',
    value: function close() {
      var $modal = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.modal));

      $modal.closeModal();
    }
  }, {
    key: 'resizeContent',
    value: function resizeContent() {
      var modal = _reactDom2.default.findDOMNode(this.refs.modal);
      var contentContainer = _reactDom2.default.findDOMNode(this.refs.contentContainer);

      (0, _jquery2.default)(modal).css("max-height", (0, _jquery2.default)(window).height() - this.props.marginHeaderFooter);
      (0, _jquery2.default)(modal).css("width", this.props.width);

      var availableHeight = this.getAvailableHeight();
      var contentHeight = this.getContentHeight();
      var containerHeight = 0;
      if (!!this.props.useAvailableHeight) {
        containerHeight = availableHeight;
      } else {
        containerHeight = Math.min(availableHeight, contentHeight);
      }

      (0, _jquery2.default)(contentContainer).css("height", containerHeight);
    }
  }, {
    key: 'getAvailableHeight',
    value: function getAvailableHeight() {
      var headerContainer = _reactDom2.default.findDOMNode(this.refs.headerContainer);
      var footerContainer = _reactDom2.default.findDOMNode(this.refs.footerContainer);

      return (0, _jquery2.default)(window).height() - this.props.marginHeaderFooter - ((0, _jquery2.default)(headerContainer).height() + (0, _jquery2.default)(footerContainer).height());
    }
  }, {
    key: 'getContentHeight',
    value: function getContentHeight() {
      var contentContainer = _reactDom2.default.findDOMNode(this.refs.contentContainer);
      var minContentHeight = this.props.minContentHeight;
      var contentHeight = 0;

      (0, _jquery2.default)(contentContainer).find("> *").each(function (i, content) {
        contentHeight += (0, _jquery2.default)(content).outerHeight();
      });

      return Math.max(minContentHeight, contentHeight);
    }
  }]);

  return Modal;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  opened: _prop_types2.default.bool,
  marginHeaderFooter: _prop_types2.default.number,
  width: _prop_types2.default.string,
  minContentHeight: _prop_types2.default.number,
  useAvailableHeight: _prop_types2.default.bool,

  dismissible: _prop_types2.default.bool,
  opacity: _prop_types2.default.number,
  inDuration: _prop_types2.default.number,
  outDuration: _prop_types2.default.number,
  ready: _prop_types2.default.func,
  complete: _prop_types2.default.func
}, _class2.defaultProps = {
  id: '',
  themeClassKey: 'modal',
  opened: false,
  marginHeaderFooter: 100,
  width: '60%',
  minContentHeight: 0,
  useAvailableHeight: false,

  dismissible: true,
  opacity: 0.4,
  inDuration: 300,
  outDuration: 200,
  ready: function ready() {
    return true;
  },
  complete: function complete() {
    return true;
  }
}, _temp2)) || _class);
exports.default = Modal;