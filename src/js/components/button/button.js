import React, { Component } from 'react';
import PropTypes from 'prop_types';
import i18n from 'i18n/i18n';
import $ from 'jquery';
import { mixin } from 'utils/decorators';

import CssClassMixin from 'mixins/css_class_mixin';
import RequestHandlerMixin from 'mixins/request_handler_mixin';

@mixin(
  CssClassMixin,
  RequestHandlerMixin
)
export default class Button extends Component {
  static propTypes = {
    name: PropTypes.localizedString,
    type: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    style: PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    actionUrl: PropTypes.string,
    actionData: PropTypes.object,
    isLoading: PropTypes.bool,
    disableWith: PropTypes.localizedString,
    confirmsWith: PropTypes.localizedString,
    element: PropTypes.oneOf(['button', 'a']),
    target: PropTypes.string,
    method: PropTypes.string,
  }

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
    method: null
  }

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: this.getButtonThemeClassKey() + this.getStyleThemeClassKey()
    }
  }

  getButtonThemeClassKey () {
    let themeClassKey = this.props.themeClassKey;

    if(!this.props.name || this.props.name.length === 0) {
      themeClassKey += ' button.iconOnly';
    }

    return themeClassKey;
  }

  getStyleThemeClassKey () {
    if(!this.props.style) {
      return '';
    }

    return ' button.' + this.props.style;
  }

  render () {
    let content = '';
    if(this.props.isLoading) {
      content = this.renderLoadingIndicator();
    } else {
      content = this.renderContent();
    }

    return (
      React.createElement(this.props.element,
        {
          className: this.getClassName(),
          type: this.props.type,
          hidden: this.props.hidden,
          visible: this.props.visible,
          disabled: this.props.disabled || this.props.isLoading,
          href: this.getHref(),
          onClick: this.handleClick,
          'data-method': this.getMethod(),
          'data-confirm': this.getConfirmsWith()
        },
        content
      )
    );
  }

  getClassName (){
    let className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  }

  getHref () {
    if (this.props.disabled && this.props.element === 'a')
      return 'javascript:void(0)';
    return this.props.href;
  }

  getMethod () {
    if(!!this.props.method) {
      return this.props.method;
    }

    return null
  }

  getConfirmsWith () {
    if(!!this.props.confirmsWith) {
      return i18n.t(this.props.confirmsWith);
    }

    return null
  }

  renderContent () {
    return [i18n.t(this.props.name), this.renderIcon()];
  }

  renderIcon () {
    if(!this.props.icon) {
      return '';
    }

    let iconProps = null;
    if($.isPlainObject(this.props.icon)) {
      iconProps = this.props.icon;
    } else {
      iconProps = { type: this.props.icon };
    }

    return <Icon className={this.getIconClassName()} {...iconProps} key="icon" />;
  }

  renderLoadingIndicator () {
      return i18n.t(this.props.disableWith);
  }

  handleClick = (event) => {
    let buttonOnClick = this.props.onClick;
    let buttonAction = this.props.actionUrl;

    if($.isFunction(buttonOnClick)) {
      this.props.onClick(event);
    } else if(!!buttonAction) {
      let actionData = this.props.actionData;
      this.performRequest(buttonAction, actionData, (this.getMethod() || 'POST'));
    }
  }

  getIconClassName () {
    if(!this.props.name || this.props.name.length === 0) {
      return '';
    } else {
      return 'right';
    }
  }
}
