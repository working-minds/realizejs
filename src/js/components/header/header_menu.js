import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mixin } from '../../utils/decorators';
import PropTypes from '../../prop_types';
import $ from 'jquery';

import CssClassMixin from '../../mixins/css_class_mixin';
import Icon from '../icon/icon';
import Menu from '../menu/menu';

@mixin(CssClassMixin)
export default class HeaderMenu extends Component {
  static propTypes = {
    id: PropTypes.string,
    leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    items: PropTypes.array,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    themeClassKey: 'header.menu',
    items: [],
    target: '_self',
    leftIcon: null,
    rightIcon: null,
    id: 'headerMenu',
    onClick() {},
  };

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.headerMenu)).dropdown();
  }

  renderIcon(propName, className) {
    const icon = this.props[propName];
    const iconProps = (typeof icon === 'string')
      ? { type: icon }
      : icon;

    if (!icon) return <span />;
    return (
      <Icon className={className} {...iconProps} />
    );
  }

  renderButton() {
    return (
      <a
        ref={ref => { this.headerMenu = ref; }}
        href={this.props.href}
        onClick={this.props.onClick}
        target={this.props.target}
        data-activates={this.props.id}
      >
        {this.renderIcon('leftIcon', 'left')}
        {this.props.text}
        {this.renderIcon('rightIcon', 'right')}
      </a>
    );
  }

  renderMenu() {
    return (
      <Menu
        className="dropdown-content"
        id={this.props.id}
        items={this.props.items}
      >
        {this.props.children}
      </Menu>
    );
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderButton()}
        {this.renderMenu()}
      </div>
    );
  }
}
