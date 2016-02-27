// TODO: [DEPRECATION] Prop ref_id is deprecated, remember to remove it.
window.Menu = React.createClass({
  propTypes: {
    ref_id: React.PropTypes.string,
    id: React.PropTypes.string,
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      ref_id:'',
      id: '',
      items: []
    };
  },

  renderPropItems: function(){
    var menuItems = this.props.items.map(function ( item,i ) {
      return <MenuItem {...item } key={ 'menu_'+i }/>;
    },this);
    return menuItems;
  },

  renderChildItems: function(){
    var menuItems = React.Children.map(this.props.children, function(item) {
      if(item && item.type && (item.type.displayName || item.type.name) === 'MenuItem')
        return item;
    });
    return menuItems;
  },

  render: function() {
    console && console.warn && console.warn('[Realize] Menu prop ref_id will be removed, use id instead!');
    var id = this.props.ref_id || (typeof this.props.id !== 'string' ? '' : this.props.id);

    return (
      <ul id={id} className={this.props.className}>
        {this.renderPropItems()}
        {this.renderChildItems()}
      </ul>
    );
  }
});
