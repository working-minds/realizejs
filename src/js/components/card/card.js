import React, { Component } from 'react';
import PropTypes from '../../prop_types';

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
