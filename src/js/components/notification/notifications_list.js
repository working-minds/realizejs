import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import { mixin } from '../../utils/decorators';

import {
  RequestHandlerMixin,
  ModalRendererMixin
} from '../../mixins';

@mixin(
  RequestHandlerMixin,
  ModalRendererMixin
)
export default class NotificationsList extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    notifications: PropTypes.array,
    handleClickItem: PropTypes.func,
    baseUrl: PropTypes.string
  };

  static defaultProps = {
    className: 'notifications-list z-depth-1',
    active: false,
    notifications: [],
    baseUrl: '/notifications',
    handleClickItem: function(data) {}
  };

  renderNotification () {
    var component = [];
    var notifications = this.props.notifications;

    for (var i = 0; i < notifications.length; i++) {
      var notification = notifications[i];
      var liClass = !!notification.read_by_user ? '' : 'not-read';

      component.push(
        <li className={liClass} key={"notification_item_" + i} >
          <a onClick={this.handleClick.bind(this, event, notification.id)}>
            <span>{notification.message}</span>
            <div className='created_at-notification'>Criado em: {moment.utc(notification.created_at).format("DD/MM/YYYY HH:mm")}</div>
          </a>
        </li>
      );
    }

    return component;
  }

  renderSeeAll () {
    var component = [];

    if (this.props.notifications.length === 0) {
      component.push(
        <div className='box-see-all' key="notification_see_all">
          <div className='divider'></div>
          <span><a>{i18n.t('buttons.noNotifications')}</a></span>
        </div>
      );
    } else {
      component.push(
        <div className='box-see-all' key="notification_see_all">
          <div className='divider'></div>
          <span><a href='/notifications'>{i18n.t('buttons.seeAll')}</a></span>
        </div>
      );
    }

    return component;
  }

  render () {
    var display = this.props.active ? 'block' : 'none';
    return (
      <div className={this.props.className} style={{display: display}}>
        <ul>
          {this.renderNotification()}
        </ul>
        {this.renderSeeAll()}
      </div>
    )
  }

  onSuccess (responseData) {
    this.renderModalHtml(responseData);
    this.props.handleClickItem(responseData);
  }

  handleClick = (event, id) => {
    var url = this.props.baseUrl+'/'+id;
    this.performRequest(url);
  }
}
