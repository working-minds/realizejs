var React = require('react');
var CssClassMixin = require('../../mixins/css_class_mixin.jsx');
var InputComponentMixin = require('../../mixins/input/input_component_mixin.jsx');
import mixin from 'react-mixin'


@mixin.decorate(CssClassMixin)
@mixin.decorate(InputComponentMixin)
export default class InputPassword extends React.Component {

  static propTypes = {
    type: React.PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    themeClassKey: 'input.text'
  };

  render() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this._handleChange}
        onFocus={this._handleFocus}
        type="password" ref="input" />
    );
  }
}
