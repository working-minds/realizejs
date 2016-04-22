import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';
import { Icon } from 'components';

@mixin(CssClassMixin)
export default class PaginationItem extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    iconType: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    active: false,
    iconType: null,
    text: '',
    onClick: function(event) {
      return true;
    }
  };

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: this.buildThemeClassKey()
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      themeClassKey: this.buildThemeClassKey(nextProps)
    });
  }

  renderIcon () {
    return <Icon type={this.props.iconType} />;
  }

  render () {
    return (
      <li className={this.className()} onClick={this.handleClick}>
        <a href="#!">
          {this.props.text}
          {!!this.props.iconType ? this.renderIcon() : ''}
        </a>
      </li>
    );
  }

  buildThemeClassKey (props) {
    props = props || this.props;
    var themeClassKey = 'pagination.item';
    if(props.disabled) {
      themeClassKey += ' pagination.item.disabled';
    }

    if(props.active) {
      themeClassKey += ' pagination.item.active';
    }

    return themeClassKey;
  }

  handleClick = () => {
    if(!this.props.disabled) {
      this.props.onClick();
    }
  }
}
