import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

@mixin(CssClassMixin)
export default class Header extends Component {
  static defaultProps = {
    themeClassKey: 'header',
    wrapperClassName: 'nav-wrapper container'
  };

  componentDidMount (){
    $(".button-collapse").sideNav({
      edge: 'right',
      closeOnClick: true
    });
    $('.collapsible').collapsible();
  }

  render () {
    return (
      <nav className={this.className()} role="navigation">
        <div className={this.props.wrapperClassName}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}
