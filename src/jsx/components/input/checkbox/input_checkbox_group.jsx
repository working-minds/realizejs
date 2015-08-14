var InputCheckboxGroup = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin
  ],

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

  renderChildItems: function() {
    var items = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.props.children[0].type.displayName == "input"))
        return item;
    });
    return items;
  },

  renderPropItems: function() {
    var items = this.props.options.map(function (optionProps, i) {
      var filledClass =  optionProps.filled? 'filled-in' : '';
      optionProps.id = this.props.name + '_' + i;

      return (
        <p key={'p_input'+i}>
          <InputCheckbox {...optionProps } name={this.props.name} className={filledClass} isChecked={optionProps.isChecked} />
          <Label {...optionProps} />
        </p>
      );
    }, this);
    return items;
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-' + this.props.align}>
        {this.renderChildItems()}
        {this.renderPropItems()}
      </div>
    );
  }

});
