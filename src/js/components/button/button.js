import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import i18n from '../../i18n/i18n';
import { autobind, mixin } from '../../utils/decorators';
import Icon from '../icon/icon';

import CssClassMixin from '../../mixins/css_class_mixin';
import RequestHandlerMixin from '../../mixins/request_handler_mixin';
import InputText from "../input/input_text";

// TODO (PJ): Separar em dois componentes os concerns de href e actionURL.
@mixin(CssClassMixin, RequestHandlerMixin)
export default class Button extends Component {
  static propTypes = {
    name: PropTypes.localizedString,
    type: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    buttonStyle: PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    actionUrl: PropTypes.string,
    actionData: PropTypes.object,
    isLoading: PropTypes.bool,
    disableWith: PropTypes.localizedString,
    confirmsWith: PropTypes.string,
    target: PropTypes.string,
    method: PropTypes.string,
    hidden: PropTypes.bool,
    element: PropTypes.component,
  };

  static defaultProps = {
    themeClassKey: 'button',
    name: '',
    disabled: false,
    isLoading: false,
    icon: null,
    href: null,
    onClick: null,
    actionUrl: null,
    actionData: {},
    disableWith: 'loading',
    confirmsWith: null,
    element: 'button',
    method: 'POST',
    hidden: false,
    buttonStyle: 'primary',
  };

  static ommitedProps = [
    'onComplete', 'onSuccess', 'onRequest', 'buttonStyle',
    'confirmsWith', 'disableWith', 'actionData', 'actionUrl',
    'isLoading', 'themeClassKey', 'clearTheme', 'element',
    'imgSrc', 'iconAlign',
  ];

  constructor(props) {
    super(props);
    this.state = {
      themeClassKey: this.getButtonThemeClassKey() + this.getStyleThemeClassKey(),
    };
  }

  getButtonThemeClassKey() {
    const { themeClassKey, name } = this.props;
    return (!name || name.length === 0)
      ? `${themeClassKey} button.iconOnly`
      : themeClassKey;
  }

  getStyleThemeClassKey() {
    const { buttonStyle } = this.props;
    return (buttonStyle) ? ` button.${buttonStyle}` : '';
  }

  getClassName() {
    return (this.props.disabled)
      ? `${this.className()}button btn-flat disable-action-button`
      : this.className();
  }

  getHref() {
    return (this.props.disabled)
      ? '#!'
      : this.props.href;
  }

  getIconClassName() {
    return (!this.props.name || this.props.name.length === 0)
      ? ''
      : 'right';
  }

  @autobind
  handleClick(event) {
    const { onClick, actionUrl, actionData, method, confirmsWith } = this.props;
    if (confirmsWith && !confirm(i18n.t(confirmsWith))) return;

    if (typeof onClick === 'function') {
      onClick(event);
    } else if (actionUrl) {
      this.performRequest(actionUrl, actionData, method);
    }
  }

  prepareProps() {
    return _.omit(this.propsWithoutCSS(), Button.ommitedProps);
  }

  renderIcon() {
    const { icon } = this.props;
    const iconProps = (typeof icon === 'string')
      ? { type: icon }
      : icon;

    if (!icon) return <span />;
    return (
      <Icon className={this.getIconClassName()} {...iconProps} />
    );
  }

  renderLoadingIndicator() {
    return (
      <span>{i18n.t(this.props.disableWith)}</span>
    );
  }

  renderContent() {
    return (
      <span>
        <span>{i18n.t(this.props.name)}</span>
        {this.renderIcon()}
      </span>
    );
  }

  render() {
    const { hidden, disabled, isLoading } = this.props;
    const ButtonElement = this.props.element;
    const buttonContent = (isLoading)
      ? this.renderLoadingIndicator()
      : this.renderContent();

    if (hidden) return <span />;
    return (
      <ButtonElement
        {...this.prepareProps()}
        className={this.getClassName()}
        disabled={disabled || isLoading}
        href={this.getHref()}
        onClick={this.handleClick}
      >
        {buttonContent}
      </ButtonElement>
    );
  }
}
