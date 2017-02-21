import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import { autobind } from 'utils/decorators';
import $ from 'jquery';

export default {
  propTypes: {
    checked: PropTypes.bool,
    renderAsIndeterminate: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      renderAsIndeterminate: false,
    };
  },

  getInitialState() {
    return {
      checked: this.getInitialChecked(),
    };
  },

  componentDidMount() {
    const inputNode = ReactDOM.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;

    const $form = $(inputNode.form);
    $form.on('reset', this._handleCheckboxReset);
  },

  componentWillUnmount() {
    const inputNode = ReactDOM.findDOMNode(this.refs.input);
    const $form = $(inputNode.form);
    $form.off('reset', this._handleCheckboxReset);
  },

  valueIsBoolean() {
    const value = this.props.value;
    return (typeof value === 'boolean' || value === 0 || value === 1);
  },

  getInitialChecked() {
    const { checked } = this.props;
    if (checked !== null && checked !== undefined) {
      return checked;
    }

    if (this.valueIsBoolean()) {
      return !!this.props.value;
    }

    return false;
  },

  /* Event handlers */

  @autobind
  _handleCheckboxReset() {
    this.setState({
      checked: this.getInitialChecked(),
    });
  },

  @autobind
  _handleCheckboxChange(event) {
    const newCheckedValue = event.target.checked;
    this.props.onChange(event, newCheckedValue, this);

    if (!event.isDefaultPrevented()) {
      const newState = { checked: newCheckedValue };
      if (this.valueIsBoolean()) {
        newState.value = newCheckedValue;
      }

      this.setState(newState);
    }
  },
};
