var InputCheckboxGroup = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.string,
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      name:'',
      align: 'vertical',
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

  renderChildren:function(){
    var menuItems = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.props.children[0].type.displayName == "InputCheckbox"))
        return item;
    });
    return menuItems;
  },

  renderItems: function(){
    var items = this.props.items.map(function ( item,i ) {
      var filledClass =  item.filled? 'filled-in' : '';
      return <p>
        <InputCheckbox {...item } id={this.props.name + '_' + i}  name={this.props.name} className={filledClass} isChecked={item.isChecked} />
        <label htmlFor={this.props.name + '_' + i}>{item.label}</label>
      </p>
    },this);
    return items;
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-'+this.props.align}>
        {this.renderChildren()}
      </div>
    );
  }

});
