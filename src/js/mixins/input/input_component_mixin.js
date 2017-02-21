import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import i18n from '../../i18n';
import themes from '../../theme';

export default {
  propTypes: {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.localizedString,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  },

  getDefaultProps() {
    return {
      disabled: false,
      readOnly: false,
      onChange: () => true,
      onFocus: () => true,
      errors: [],
    };
  },

  getInitialState() {
    return {
      value: this.props.value,
    };
  },

  componentDidMount() {
    this.setState({ mounted: true }, () => {
      const form = this.getInputFormNode();
      form && form.addEventListener('reset', this._handleReset);
    });
  },

  componentWillUnmount() {
    const form = this.getInputFormNode();
    form && form.removeEventListener('reset', this._handleReset);
    this.setState({ mounted: false });
  },

  getInputFormNode() {
    const inputRef = this.refs.input;
    return this.refs.input ? ReactDOM.findDOMNode(inputRef).form : null;
  },

  _handleReset(event) {
    if (this.state.mounted && !this.inputNodeIsCheckbox()) {
      this.setState({ value: null });
    }
  },

  _handleChange(event) {
    const newValue = event.target.value;
    this.props.onChange(event, newValue, this);

    if (!event.isDefaultPrevented()) {
      this.setState({ value: newValue });
    }
  },

  _handleFocus(event) {
    this.props.onFocus(event);

    if(this.props.readOnly) {
      event.currentTarget.blur();
    }
  },

  inputClassName() {
    const className = this.className();
    const errors = this.props.errors;

    if (!!errors && errors.length > 0) {
      return `${className} ${themes.getCssClass('input.error')}`;
    }

    return className;
  },

  getPlaceholder() {
    const placeholder = i18n.t(this.props.placeholder);

    if (typeof placeholder !== 'string' || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox() {
    const inputNode = ReactDOM.findDOMNode(this.refs.input);
    return (!!inputNode && inputNode.type === 'checkbox');
  },

  /* Serializer functions */

  getValue() {
    const componentGetValue = this._getValue;

    // workaround para o problema de não ser possível sobrescrever funções de mixins.
    if (!!componentGetValue && typeof componentGetValue == "function") {
      return componentGetValue();
    }

    return this.state.value;
  },

};
