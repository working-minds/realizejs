import React, { Component } from 'react';
import PropTypes from 'prop_types';

export default class LabelPermission extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  renderLabel() {
    const component = [];
    const permissions = this.props.value;

    if (permissions.length === 0) {
      component.push(<div> - </div>);
    } else {
      permissions.forEach((permission) => {
        component.push(<div>{I18n.t(`permissions.${permission}`)}</div>);
      });
    }

    return component;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderLabel()}
      </div>
    );
  }
}
