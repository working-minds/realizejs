import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';

import { NotificationNumber, NotificationList } from '../../components/notification';

export default class HeaderNotifications extends Component {
  static propTypes = {
    ouSlug: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    baseUrl: PropTypes.string
  };

  static defaultProps = {
    ouSlug: null,
    className: 'notifications',
    icon: 'add_alert',
    text: '',
    baseUrl: '/notifications'
  };

  state = {
    count: 0,
    active: false
  };

  componentDidMount () {
    //TODO: alterar estes event handlers para o React.
    $('html').on('click', this.closeList);

    $('.notifications-list').mouseover(function() {
      $('body').addClass('noscroll')
    });

    $('.notifications-list').mouseout(function() {
      $('body').removeClass('noscroll')
    });

    this.loadNotifications();
  }

  renderIcon () {
    var component = [];

    if (this.state.count > 0) {
      component.push(<i className="material-icons" key="notification_icon">notifications</i>);
    } else {
      component.push(<i className="material-icons" key="notification_icon">notifications_none</i>);
    }

    return component;
  }

  render (){
    return (
      <div className={this.props.className}>
        <a onClick={this.handleClick}>
          {this.renderIcon()}
          <NotificationNumber count={this.state.count} />
        </a>
        <NotificationsList ref={ref => { this.notificationsList = ref; }}
                           active={this.state.active}
                           baseUrl={this.props.baseUrl}
                           handleClickItem={this.handleClickItem}
                           notifications={this.state.notifications}
          />
      </div>
    );
  }

  closeList () {
    this.setState({
      active: false
    })
  }

  loadNotifications () {
    $.ajax({
      url: this.props.baseUrl,
      dataType: 'json',
      data: {
        per_page: 50,
        ou_slug: this.props.ouSlug,
        q: {
          s: 'created_at desc'
        }
      },
      success: function(data) {
        this.setState({
          notifications: data.notifications,
          count: data.unread_count
        });
      }.bind(this)
    });
  }

  handleClick = () => {
    var list = ReactDOM.findDOMNode(this.notificationsList);
    $(list).slideDown();
    this.state.active = !this.state.active;
    this.forceUpdate();
  }

  handleClickItem = (responseData) => {
    $.ajax({
      url: this.props.baseUrl,
      dataType: 'json',
      data: {
        per_page: 50,
        q: {
          s: 'created_at desc'
        }
      },
      success: function(data) {
        this.setState({
          notifications: data.notifications,
          count: data.not_read_count
        });
      }.bind(this)
    });
  }
}
