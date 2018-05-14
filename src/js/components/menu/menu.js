import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';
import MenuItem from './menu_item';

@mixin(CssClassMixin)
export default class Menu extends Component {
  static propTypes = {
    id: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    id: 'menu',
    items: [],
  };

  renderPropItems() {
    return this.props.items.map((item, i) => (
      <MenuItem {...item} key={`menu_${i}`} />
    ));
  }

  renderChildItems() {
    return React.Children.map(this.props.children, item => {
      if (item && item.type && (item.type.displayName || item.type.name) === 'MenuItem') {
        return item;
      }
    });
  }

  render() {
    return (
      <ul id={this.props.id} className={this.className()}>
        {this.renderPropItems()}
        {this.renderChildItems()}
      </ul>
    );
  }
}
