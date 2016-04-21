import PropTypes from 'prop_types';

export default {
  propTypes: {
    tooltipDelay: PropTypes.number,
    tooltipText: PropTypes.string,
    tooltipPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right'])
  },

  getDefaultProps () {
    return {
      tooltipDelay: 10,
      tooltipPosition: 'top',
      tooltipText: null
    };
  },

  componentDidUpdate () {
    this.initializeTooltip();
  },

  componentDidMount () {
    this.initializeTooltip();
  },

  initializeTooltip () {
    if(!!this.props.tooltipText) {
      $('.tooltipped').tooltip();
    }
  },

  getTooltipClassName () {
    let className = this.className();
    if(!!this.props.tooltipText)
      className += ' tooltipped';

    return className;
  },

  tooltipAttributes () {
    return {
      'data-position': this.props.tooltipPosition,
      'data-delay': this.props.tooltipDelay,
      'data-tooltip': this.props.tooltipText
    };
  }
}
