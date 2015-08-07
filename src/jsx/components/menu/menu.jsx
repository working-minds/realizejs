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

  componentWillMount: function() {
    if(!Array.isArray(this.props.children))
      this.props.children = [this.props.children];

    var items = this.renderItems();
    $(items).each(function (i, element) {
      this.props.children.push(element);
    }.bind(this));
  },

  render: function() {
    return (
      <ul id={this.props.ref_id} className={this.props.className}>
        {this.renderChildren()}
      </ul>
    );
  },

  renderItems: function(){
    var menuItems = this.props.items.map(function ( item ) {
      return <MenuItem {...item }/>;
    },this);
    return menuItems;
  },

  renderChildren:function(){
    var menuItems = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.type.displayName = "MenuItem"))
        return item;
    });
    return menuItems;
  }
});


var MenuItem = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left'
    };
  },

  render: function() {
    var icon = (this.props.icon !== undefined)? <i className={'material-icons ' + (this.props.iconAlign || this.props.iconAlign)}>{this.props.icon}</i> : '';
    return (
      <li>
        <a href={this.props.onClick? '#': this.props.href} onClick={this.props.onClick} target={this.props.target} className={this.props.className}>
             {icon}
             {this.props.text}
        </a>
      </li>
    );
  }
});

