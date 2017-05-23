import React, { Component } from 'react';
import PropTypes from '../../prop_types';

export default class HeaderSection extends Component {
  static propTypes = {
    align: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    align: 'left',
    className: 'hide-on-med-and-down'
  };

  renderChildren () {
    return React.Children.map(this.props.children, function(child, i) {
      return <li key={"item_" + i}>{child}</li>;
    });
  }

  render () {
    return (
      <ul className={this.props.className + ' ' + this.props.align} id={this.props.id}>
        {this.renderChildren()}
      </ul>
    );
  }
}
