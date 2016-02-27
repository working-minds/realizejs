var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var SelectComponentMixin = require('realize/mixins/input/select_component_mixin.jsx');

window.InputCheckboxGroup = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    name: React.PropTypes.string,
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValues: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      name:'',
      align: 'vertical'
    };
  },

  getInitialState: function() {
    return {
      currentValues: this.props.currentValues
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
    var selectOptions = [];
    var options = this.state.options;

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];

      var filledClass =  optionProps.filled? 'filled-in' : '';
      optionProps.id = this.props.id + '_' + i;

      selectOptions.push(
        <p key={'p_input'+i}>
          <InputCheckbox {...optionProps } name={this.props.name} className={filledClass} checked={this.isChecked(optionProps)}/>
          <Label {...optionProps} />
        </p>
      );
    }
    return selectOptions;
  },

  render: function() {
    return (
      <div className={'input-checkbox-group align-' + this.props.align}>
        {this.renderChildItems()}
        {this.renderPropItems()}
      </div>
    );
  },

  isChecked: function(item){
    var currentValues = this.state.currentValues;
    if(!$.isArray(currentValues))
      currentValues = [currentValues];
    return ($.inArray( item.value , currentValues ) !== -1);
  }

});
