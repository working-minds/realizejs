var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var ModalRendererMixin = require('realize/mixins/modal_renderer_mixin.jsx');
var moment = require('moment');

window.NotificationsList = React.createClass({
  mixins: [RequestHandlerMixin, ModalRendererMixin],

  propTypes: {
    className: React.PropTypes.string,
    active: React.PropTypes.bool,
    notifications: React.PropTypes.array,
    handleClickItem: React.PropTypes.func,
    baseUrl: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'notifications-list z-depth-1',
      active: false,
      notifications: [],
      baseUrl: '/notifications',
      handleClickItem: function(data) {}
    }
  },

  handleClick: function(event, id) {
    var url = this.props.baseUrl+'/'+id;
    this.performRequest(url);
  },

  onSuccess: function(responseData) {
    this.renderModalHtml(responseData);
    this.props.handleClickItem(responseData);
  },

  renderNotification: function() {
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
  },

  renderSeeAll: function() {
    var component = [];

    if (this.props.notifications.length === 0) {
      component.push(
        <div className='box-see-all' key="notification_see_all">
          <div className='divider'></div>
          <span><a>{I18n.t('labels.not-notifications')}</a></span>
        </div>
      );
    } else {
      component.push(
        <div className='box-see-all' key="notification_see_all">
          <div className='divider'></div>
          <span><a href='/notifications'>{I18n.t('buttons.see-all')}</a></span>
        </div>
      );
    }

    return component;
  },

  render: function() {
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

});