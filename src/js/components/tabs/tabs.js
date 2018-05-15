import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';

import {
  CssClassMixin,
  ContainerMixin
} from '../../mixins';

@mixin(
  CssClassMixin,
  ContainerMixin
)
export default class Tabs extends Component {
  static propTypes = {
    activeTab: PropTypes.number
  };

  static defaultProps = {
    themeClassKey: 'tabs',
    activeTab: 1
  };

  componentDidMount () {
    $(ReactDOM.findDOMNode(this.tabsContainer)).tabs();
  }

  renderTabButtons () {
    var tabs = [];
    var children = this.getChildren();

    React.Children.forEach(children, function(child, i) {
      var isActive = (i === (this.props.activeTab - 1));
      tabs.push(<TabButton {...child.props} active={isActive} key={"tab_" + i} />);
    }.bind(this));

    return tabs;
  }

  render () {
    return (
      <div className={this.className()}>
        <ul className="tabs z-depth-1" ref={ref => { this.tabsContainer = ref; }}>
          {this.renderTabButtons()}
        </ul>
        <div>
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}
