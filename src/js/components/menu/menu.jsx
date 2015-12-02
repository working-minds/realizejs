var Menu = React.createClass({
  propTypes: {
    ref_id: React.PropTypes.string,
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      ref_id:'',
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
      if((item !== null) && (item.type.displayName = "MenuItem"))
        return item;
    });
    return menuItems;
  },

  render: function() {
    return (
      <ul id={this.props.ref_id} className={this.props.className}>
        {this.renderPropItems()}
        {this.renderChildItems()}
      </ul>
    );
  }
});


var MenuItem = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    className: React.PropTypes.string,
    method: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left',
      method: 'get',
      element: 'a'
    };
  },

  render: function() {
    return (
      <li>
        <Button {...this.props} clearTheme={true} name={this.props.text} />
      </li>
    );
  }
});

