import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';

import Menu from '../../components/menu/menu';

export default class HeaderMenu extends Component {
  static propTypes = {
    items: PropTypes.array,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    items: [],
    leftIcon: '',
    rightIcon: '',
    id: 'headerMenu'
  };

  componentDidMount (){
    $(ReactDOM.findDOMNode(this.refs.readerMenu)).dropdown();
  }

  renderMenu (){
    return (
        <Menu id={this.props.id} className="dropdown-content" items={this.props.items}>
          {this.props.children}
        </Menu>
    );
  }

  render () {
    let leftIcon =  (this.props.leftIcon !== '')? <i className={'material-icons left'}>{this.props.leftIcon}</i> : '';
    let rightIcon =  (this.props.rightIcon !== '')? <i className={'material-icons right'}>{this.props.rightIcon}</i> : '';

    return (
        <div>
          <a href={this.props.href} ref="readerMenu" onClick={this.props.onClick} target={this.props.target} data-activates={this.props.id}>
            {leftIcon}
            {this.props.text}
            {rightIcon}
          </a>
          {this.renderMenu()}
        </div>
    );
  }
}
