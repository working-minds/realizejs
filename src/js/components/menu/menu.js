import React, { Component } from 'react';
import PropTypes from '../../prop_types';

import MenuItem from './menu_item';

// TODO: [DEPRECATION] Prop ref_id is deprecated, remember to remove it.
export default class Menu extends Component {
  static propTypes = {
    ref_id: PropTypes.string,
    id: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    ref_id:'',
    id: '',
    items: []
  };

  renderPropItems (){
    let menuItems = this.props.items.map(function ( item,i ) {
      return <MenuItem {...item } key={ 'menu_'+i }/>;
    },this);
    return menuItems;
  }

  renderChildItems (){
    let menuItems = React.Children.map(this.props.children, function(item) {
      if(item && item.type && (item.type.displayName || item.type.name) === 'MenuItem')
        return item;
    });
    return menuItems;
  }

  render () {
    console && console.warn && console.warn('[Realize] Menu prop ref_id will be removed, use id instead!');
    let id = this.props.ref_id || (typeof this.props.id !== 'string' ? '' : this.props.id);

    return (
      <ul id={id} className={this.props.className}>
        {this.renderPropItems()}
        {this.renderChildItems()}
      </ul>
    );
  }
}
