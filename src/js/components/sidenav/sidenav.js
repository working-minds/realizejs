import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

import Menu from '../../components/menu/menu';

@mixin(CssClassMixin)
export default class SideNav extends Component {
  static propTypes = {
    items: PropTypes.array,
    icon: PropTypes.string,
    iconAlign: PropTypes.string,
    text: PropTypes.string,
    id:PropTypes.string
  };

  static defaultProps = {
    themeClassKey: 'sidenav.button',
    items: [],
    icon: 'view_headline',
    iconAlign: '',
    id: 'sideNav',
    text: ''
  };

  componentDidMount (){
    $(ReactDOM.findDOMNode(this.sideNav)).sideNav();
  }

  renderMenu (){
    return (
      <Menu
        id={this.props.id}
        className="side-nav full"
        items={this.props.items}>
        {this.props.children}
      </Menu>
    );
  }

  render () {
    let iconAlign = this.props.text? 'left' : '';

    return (
      <div>
        <a href={this.props.href} className={this.className()} ref={ref => { this.sideNav = ref; }} onClick={this.props.onClick} target={this.props.target} data-activates={this.props.id}>
          <i className={'material-icons ' + iconAlign}>{this.props.icon}</i>
          {this.props.text}
        </a>
        {this.renderMenu()}
      </div>
    );
  }
}
