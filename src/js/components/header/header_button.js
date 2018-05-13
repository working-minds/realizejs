import React, { Component } from 'react';
import { Link } from '../../components/link';
import PropTypes from '../../prop_types';

export default class HeaderButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    icon: PropTypes.string,
    iconAlign: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    element: PropTypes.component,
  };

  static defaultProps = {
    className: 'brand-logo',
    iconAlign: 'left',
    imgSrc: null,
    text: '',
    element: Link,
  };

  renderIcon() {
    if (!this.props.imgSrc && this.props.icon) {
      return (
        <i className={`material-icons ${this.props.iconAlign}`}>
          {this.props.icon}
        </i>
      );
    }

    return <span />;
  }

  renderImage() {
    if (this.props.imgSrc) {
      return <img src={this.props.imgSrc} alt={this.props.imgAlt} />;
    }

    return <span />;
  }

  renderText() {
    return (
      <span className={`${this.props.className}__text`}>{this.props.text}</span>
    );
  }

  render() {
    const ButtonComponent = this.props.element;

    return (
      <ButtonComponent {...this.props} >
        {this.renderIcon()}
        {this.renderImage()}
        {this.renderText()}
      </ButtonComponent>
    );
  }
}
