import InputBase from '../input_base';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import { autobind } from '../../../utils/decorators';
import { isNil } from 'lodash';

export default class InputCheckboxBase extends InputBase {
  static propTypes = {
    checked: PropTypes.bool,
    renderAsIndeterminate: PropTypes.bool,
  };

  static defaultProps = {
    renderAsIndeterminate: false,
  };

  state = {
    ...this.state,
    checked: this.getInitialChecked(),
  };

  componentDidMount() {
    super.componentDidMount();

    const inputNode = ReactDOM.findDOMNode(this.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;
  }

  valueIsBoolean() {
    const value = this.props.value;
    return (typeof value === 'boolean' || value === 0 || value === 1);
  }

  getInitialChecked() {
    return this.getCheckedOrBooleanValue();
  }

  getCheckedOrBooleanValue() {
    const { checked } = this.props;
    return !isNil(checked) ? checked : this.getBooleanValue();
  }

  getBooleanValue() {
    return this.valueIsBoolean() ? !!this.props.value : false;
  }

  @autobind
  handleReset() {
    if (!this.mounted) return;

    this.setState({
      checked: this.getInitialChecked(),
    });
  }

  @autobind
  handleChange(event) {
    const newCheckedValue = event.target.checked;
    this.props.onChange(event, newCheckedValue, this);

    if (!event.isDefaultPrevented()) {
      const newState = { checked: newCheckedValue };
      if (this.valueIsBoolean()) {
        newState.value = newCheckedValue;
      }

      this.setState(newState);
    }
  }
}
