import React, { Component } from 'react';
import PropTypes from 'prop_types';

export default class HeaderButton extends Component {
  static propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    icon: PropTypes.string,
    iconAlign: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    ref: PropTypes.string
  };

  static defaultProps = {
    iconAlign: ' '
  };

  renderButton () {
    return (
      <a href={this.props.href} ref={this.props.ref}  onClick={this.props.onClick} target={this.props.target} >
        <i className={'material-icons ' + this.props.iconAlign}>{this.props.icon}</i>{this.props.text}
      </a>
    );
  }

  renderImage (){
    return (
      <a className="brand-logo" href={this.props.href}>
        <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
      </a>);
  }

  render () {
    let button = '';
    if(this.props.imgSrc)
      button = this.renderImage();
    else
      button = this.renderButton();

    return (
      button
    );
  }
}
