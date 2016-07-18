'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentDidMount: function componentDidMount() {
    this.applyMaterialize(true);
  },

  componentDidUpdate: function componentDidUpdate(previousProps, previousState) {
    if (this.state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  applyMaterialize: function applyMaterialize(onMount) {
    var selectElement = _reactDom2.default.findDOMNode(this.refs.select);
    (0, _jquery2.default)(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));

    if (!onMount) {
      this.handleChangeMaterialize(selectElement);
    }
  },

  handleChangeMaterialize: function handleChangeMaterialize(selectElement) {
    var $selectElement = (0, _jquery2.default)(selectElement);
    var newValue = this.ensureIsArray(selectElement.value);
    var fakeEvent = {
      currentTarget: selectElement,
      target: selectElement
    };

    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    this.setState({
      value: newValue
    }, this.triggerDependableChanged);

    this.props.onChange(fakeEvent, newValue, this);
  }
};