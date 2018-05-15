import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import themes from '../../theme';
import i18n from '../../i18n';
import { autobind } from '../../utils/decorators';
import { setState } from '../../utils/react';

export default class InputBase extends Component {
  static _propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.localizedString,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static _defaultProps = {
    value: '',
    disabled: false,
    readOnly: false,
    onChange: () => true,
    onFocus: () => true,
    errors: [],
  };

  static get propTypes() {
    return this._propTypes;
  }

  static set propTypes(newPropTypes) {
    this._propTypes = { ...this._propTypes, ...newPropTypes };
  }

  static get defaultProps() {
    return this._defaultProps;
  }

  static set defaultProps(newDefaultProps) {
    this._defaultProps = { ...this._defaultProps, ...newDefaultProps };
  }

  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  state = {
    value: this.props.value,
  };

  setStatePromise = setState.bind(null, this);

  componentDidMount() {
    this.mounted = true;

    const form = this.getInputFormNode();
    if (form) {
      form.addEventListener('reset', this.handleReset);
    }
  }

  componentWillUnmount() {
    this.mounted = false;

    const form = this.getInputFormNode();
    if (form) {
      form.removeEventListener('reset', this.handleReset);
    }
  }

  getInputFormNode() {
    if (!!this.input) {
      return ReactDOM.findDOMNode(this.input).form;
    }

    return null;
  }

  getPlaceholder() {
    const placeholder = i18n.t(this.props.placeholder);
    if (typeof placeholder !== 'string' || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  }

  getValue() {
    return this.state.value;
  }

  inputClassName() {
    let className = this.className();
    const errors = this.props.errors;

    if (!!errors && errors.length > 0) {
      className += ` ${themes.getCssClass('input.error')}`;
    }

    return className;
  }

  inputNodeIsCheckbox() {
    const inputNode = ReactDOM.findDOMNode(this.input);
    return (!!inputNode && inputNode.type === 'checkbox');
  }

  @autobind
  handleReset() {
    if (this.mounted && !this.inputNodeIsCheckbox()) {
      this.setState({ value: null });
    }
  }

  @autobind
  handleChange(event) {
    const { value } = event.target;
    this.props.onChange(event, value);

    if (!event.isDefaultPrevented()) {
      this.setState({ value });
    }
  }

  @autobind
  handleFocus(event) {
    this.props.onFocus(event);

    if (this.props.readOnly) {
      const inputNode = event.currentTarget;
      inputNode.blur();
    }
  }

  render() {
    return null;
  }
}
