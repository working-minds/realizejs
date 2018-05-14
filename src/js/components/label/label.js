import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

@mixin(CssClassMixin)
export default class Label extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    active: PropTypes.bool,
    onClick: PropTypes.func,
    required: PropTypes.bool
  };

  static defaultProps = {
    active: false,
    name: '',
    label: '',
    themeClassKey: 'label',
    required: false
  };

  constructor(props) {
    super(props);
    this.state = {
      themeClassKey: this.getLabelThemeClassKey(this.props)
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      themeClassKey: this.getLabelThemeClassKey(nextProps)
    });
  }

  getLabelThemeClassKey (props) {
    let themeClassKey = props.themeClassKey;
    if(props.active) {
      themeClassKey += ' label.active';
    }

        return themeClassKey;
    };

  render () {
    let labelProp = this.props.label;
    if(typeof(labelProp) == "boolean" && !labelProp) {
      return <span />;
    }
    var text = (labelProp || this.props.name)
    if(this.props.required)
      text += ' *'

    return (
      <label htmlFor={this.props.id} onClick={this.props.onClick} className={this.className()}>
        {text}
      </label>
    );
  }
}
