import React, { Component } from 'react';
import PropTypes from 'prop_types';

export default class NotificationNumber extends Component {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.number
  };

  static defaultProps = {
    className: 'notification-number',
    count: 0
  };

  rende () {
    return (
      <span className='jewelCount'>
        {this.unreadNotificationNumber()}
      </span>
    )
  }

  unreadNotificationNumber (){
    var component = [];
    if (!!this.props.count && this.props.count > 0)
      component.push(<span className={this.props.className} key="notification_count">{this.props.count}</span>);
    return component;
  }
}
