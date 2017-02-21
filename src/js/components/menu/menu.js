import React, { Component } from 'react';
import PropTypes from '../../prop_types';

import MenuItem from './menu_item';

export default class Menu extends Component {
  static propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    id: '',
    items: []
  };

  renderPropItems () {
    let menuItems = this.props.items.map(function ( item,i ) {
      return <MenuItem {...item } key={ 'menu_'+i }/>;
    },this);
    return menuItems;
  }

  renderChildItems () {
    let menuItems = React.Children.map(this.props.children, function(item) {
      if(item && item.type && (item.type.displayName || item.type.name) === 'MenuItem')
        return item;
    });
    return menuItems;
  }

  render () {
    let id = this.props.id !== 'string' ? '' : this.props.id;

    return (
      <ul id={id} className={this.props.className}>
        {this.renderPropItems()}
        {this.renderChildItems()}
      </ul>
    );
  }
}
