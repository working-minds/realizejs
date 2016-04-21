window.HeaderNotifications = React.createClass({
  propTypes: {
    ouSlug: React.PropTypes.string,
    className: React.PropTypes.string,
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    baseUrl: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      ouSlug: null,
      className: 'notifications',
      icon: 'add_alert',
      text: '',
      baseUrl: '/notifications'
    }
  },

  getInitialState: function() {
    return {
      count: 0,
      active: false
    }
  },

  handleClick: function(){
    var list = ReactDOM.findDOMNode(this.refs.notificationsList);
    $(list).slideDown();
    this.state.active = !this.state.active;
    this.forceUpdate();
  },

  closeList: function() {
    this.setState({
      active: false
    })
  },

  componentDidMount: function() {
    //TODO: alterar estes event handlers para o React.
    $('html').on('click', this.closeList);

    $('.notifications-list').mouseover(function() {
      $('body').addClass('noscroll')
    });

    $('.notifications-list').mouseout(function() {
      $('body').removeClass('noscroll')
    });

    this.loadNotifications();
  },

  loadNotifications: function() {
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
  },

  renderIcon: function() {
    var component = [];

    if (this.state.count > 0) {
      component.push(<i className="material-icons" key="notification_icon">notifications</i>);
    } else {
      component.push(<i className="material-icons" key="notification_icon">notifications_none</i>);
    }

    return component;
  },

  handleClickItem: function(responseData) {
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

  },

  render : function(){
    return (
      <div className={this.props.className}>
        <a onClick={this.handleClick}>
          {this.renderIcon()}
          <NotificationNumber count={this.state.count} />
        </a>
        <NotificationsList ref='notificationsList'
                           active={this.state.active}
                           baseUrl={this.props.baseUrl}
                           handleClickItem={this.handleClickItem}
                           notifications={this.state.notifications}
          />
      </div>
    );
  }

});

var NotificationNumber= React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    count: React.PropTypes.number
  },

  getDefaultProps: function(){
    return {
      className: 'notification-number',
      count: 0
    }
  },

  unreadNotificationNumber: function(){
    var component = [];
    if (!!this.props.count && this.props.count > 0)
      component.push(<span className={this.props.className} key="notification_count">{this.props.count}</span>);
    return component;
  },

  render: function() {
    return (
      <span className='jewelCount'>
        {this.unreadNotificationNumber()}
      </span>
    )
  }

});