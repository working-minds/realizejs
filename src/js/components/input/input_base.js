import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import themes from '../../theme'
import i18n from '../../i18n';
import { autobind } from '../../utils/decorators';

export default class InputBase extends Component {
  static propTypes = {
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

  static defaultProps = {
    value: null,
    disabled: false,
    readOnly: false,
    onChange: () => true,
    onFocus: () => true,
    errors: [],
  };

  state = {
    value: this.props.value,
  };

  componentDidMount() {
    const $form = $(this.getInputFormNode());
    $form.on('reset', this.handleReset);
  }

  componentWillUnmount() {
    const $form = $(this.getInputFormNode());
    $form.off('reset', this.handleReset);
  }

  getInputFormNode() {
    const inputRef = this.refs.input;
    if (!!inputRef) {
      return ReactDOM.findDOMNode(inputRef).form;
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
    const inputNode = ReactDOM.findDOMNode(this.refs.input);
    return (!!inputNode && inputNode.type === 'checkbox');
  }

  @autobind
  handleReset() {
    console.log(this.isMounted());

    if (this.isMounted() && !this.inputNodeIsCheckbox()) {
      this.setState({
        value: null,
      });
    }
  }

  @autobind
  handleChange(event) {
    this.props.onChange(event);

    if (!event.isDefaultPrevented()) {
      const value = event.target.value;
      this.setState({ value });
    }
  }

//  @autobind
  handleFocus = (event) => {
    this.props.onFocus(event);

    if (this.props.readOnly) {
      const inputNode = event.currentTarget;
      inputNode.blur();
    }
  };

  render() {
    return null;
  }
}
