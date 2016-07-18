'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    tooltipDelay: _prop_types2.default.number,
    tooltipText: _prop_types2.default.string,
    tooltipPosition: _prop_types2.default.oneOf(['bottom', 'top', 'left', 'right'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      tooltipDelay: 10,
      tooltipPosition: 'top',
      tooltipText: null
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    this.initializeTooltip();
  },
  componentDidMount: function componentDidMount() {
    this.initializeTooltip();
  },
  initializeTooltip: function initializeTooltip() {
    if (!!this.props.tooltipText) {
      $('.tooltipped').tooltip();
    }
  },
  getTooltipClassName: function getTooltipClassName() {
    var className = this.className();
    if (!!this.props.tooltipText) className += ' tooltipped';

    return className;
  },
  tooltipAttributes: function tooltipAttributes() {
    return {
      'data-position': this.props.tooltipPosition,
      'data-delay': this.props.tooltipDelay,
      'data-tooltip': this.props.tooltipText
    };
  }
};