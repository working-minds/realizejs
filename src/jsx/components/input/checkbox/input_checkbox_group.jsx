var InputCheckboxGroup = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    options: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      name:'',
      align: 'vertical',
      options: []
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
    var items = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.props.children[0].type.displayName == "InputCheckbox"))
        return item;
    });
    return items;
  },

  renderItems: function(){
    return this.props.options.map(function (optionProps, i) {
      var filledClass =  optionProps.filled? 'filled-in' : '';
      optionProps.id = this.props.name + '_' + i;

      return (
        <p>
          <InputCheckbox {...optionProps } name={this.props.name} className={filledClass} isChecked={optionProps.isChecked} />
          <Label {...optionProps} />
        </p>
      );
    }, this);
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-'+this.props.align}>
        {this.renderChildren()}
      </div>
    );
  }

});
